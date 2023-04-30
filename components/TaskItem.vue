<template>
  <div
    class="cursor-pointer p-4 bg-white border border-gray-200 rounded-lg shadow mt-4"
    data-id="task.id"
  >
    <div class="flex items-center justify-between space-x-4">
      <div class="flex-shrink-0">
        <span v-if="!task.editing" class="inline-block mr-2">{{
          task.name
        }}</span>
        <span v-if="task.editing" class="inline-block mr-2">
          <input
            type="text"
            ref="taskInput"
            @blur="finishEditing(task)"
            @keydown.enter="finishEditing(task)"
            v-model="task.name"
            class="p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </span>
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex-shrink-0 flex items-center justify-end">
          <button
            @click="toggleEdit(task)"
            class="text-blue-500 hover:text-blue-700 mr-1"
          >
            Edit
          </button>
          <button
            @click="onDeleteTasks(task)"
            class="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
    onDeleteTasks: Function,
  },
  methods: {
    // Toggle the editing state of the task
    toggleEdit(task) {
      task.editing = !task.editing;
      if (task.editing) {
        // Focus on the input element after it becomes visible
        this.$nextTick(() => {
          this.$refs.taskInput.focus();
        });
      }
    },
    // Finish editing the task and save changes
    finishEditing(task) {
      task.editing = false;
    },
  },
};
</script>