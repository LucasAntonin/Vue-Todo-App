<template>
  <div class="flex justify-center items-center dark:bg-black">
    <div class="container p-4 mt-5">
      <div
        class="min-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <h1 class="text-4xl font-bold mb-4">To-Do List</h1>
        <TaskAddForm :tasks="pendingTasks" @on-add-task="addTask" />
        <h1 class="text-xl font-bold mt-3 mb-2">To-Do</h1>
        <draggable
          v-model="pendingTasks"
          group="tasks"
          @end="updateLocalStorage"
        >
          <div v-for="task in pendingTasks" :key="task.id">
            <TaskItem :task="task" :onDeleteTasks="deleteTask" />
          </div>
        </draggable>
        <h2 class="text-xl font-bold mt-10 mb-2">Done</h2>
        <draggable v-model="doneTasks" group="tasks" @end="updateLocalStorage">
          <div v-for="task in doneTasks" :key="task.id">
            <TaskItem :task="task" :onDeleteTasks="deleteTask" />
          </div>
        </draggable>
        <div class="flex items-center justify-between mt-10">
          <span></span>
          <button
            type="button"
            class="text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            @click="deleteAllTasks"
          >
            Delete All Tasks
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },

  data() {
    return {
      pendingTasks: [],
      doneTasks: [],
    };
  },

  created() {
    // Load tasks from localStorage when the component is created
    if (typeof window !== "undefined") {
      const tasksJson = localStorage.getItem("tasks");
      if (tasksJson) {
        const allTasks = JSON.parse(tasksJson);
        this.pendingTasks = allTasks.filter((task) => !task.done);
        this.doneTasks = allTasks.filter((task) => task.done);
      }
    }
  },

  watch: {
    pendingTasks: {
      deep: true,
      handler() {
        this.updateLocalStorage();
      },
    },
    doneTasks: {
      deep: true,
      handler() {
        this.updateLocalStorage();
      },
    },
  },

  methods: {
    addTask(newTask) {
      this.pendingTasks.push(newTask);
    },

    // Update localStorage with the current state of pendingTasks and doneTasks
    updateLocalStorage() {
      // Set done property for pendingTasks and doneTasks
      this.pendingTasks.forEach((task) => {
        task.done = false;
      });
      this.doneTasks.forEach((task) => {
        task.done = true;
      });
      // Merge both arrays and store them in localStorage
      const tasks = [...this.pendingTasks, ...this.doneTasks];
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },

    // Delete a task from the list and update localStorage
    deleteTask(taskToDelete) {
      // Find and remove the task from pendingTasks
      let index = this.pendingTasks.findIndex(
        (task) => task.id === taskToDelete.id
      );
      if (index !== -1) {
        this.pendingTasks.splice(index, 1);
      } else {
        // If the task is not in pendingTasks, find and remove it from doneTasks
        index = this.doneTasks.findIndex((task) => task.id === taskToDelete.id);
        if (index !== -1) {
          this.doneTasks.splice(index, 1);
        }
      }
    },
    // Delete all tasks from the list and update localStorage
    deleteAllTasks() {
      this.pendingTasks = [];
      this.doneTasks = [];
    },
  },
};
</script>
