<template>
  <form @submit.prevent="addTask()" class="flex mb-8">
    <label for="task" class="sr-only">New Task:</label>
    <div class="relative w-full">
      <input
        type="text"
        id="task"
        v-model="newTask"
        class="p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
        placeholder="New Task"
        required
      />
      <button
        type="submit"
        class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        ADD
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    tasks: Array,
  },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    // Function to create a new task object and emit an event to the parent component
    addTask() {
      const id = Date.now();
      const newTask = {
        id: id,
        name: this.newTask,
        editing: false,
        done: false,
      };
      this.$emit("on-add-task", newTask);
      this.newTask = "";
    },
  },
};
</script>