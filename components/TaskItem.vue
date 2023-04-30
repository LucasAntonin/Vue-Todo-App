<template>
  <div
    class="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4"
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
            v-model="task.name"
            class="p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
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
    toggleEdit(task) {
      if (task.editing) {
        task.editing = false;
      } else {
        task.editing = true;
      }
    },
  },
};
</script>