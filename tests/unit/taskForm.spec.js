import { shallowMount } from "@vue/test-utils";
import TaskForm from "@/components/TaskForm.vue";

describe("TaskForm.vue", () => {
  test("renders the component", () => {
    const wrapper = shallowMount(TaskForm);
    expect(wrapper.exists()).toBe(true);
  });

  test("emits 'on-add-task' event with new task data when form is submitted", async () => {
    const wrapper = shallowMount(TaskForm);
    const input = wrapper.find("input");
    const newTaskName = "New Task";

    input.setValue(newTaskName);
    await wrapper.find("form").trigger("submit.prevent");

    const emitted = wrapper.emitted("on-add-task");
    expect(emitted).toBeTruthy();
    expect(emitted[0][0].name).toBe(newTaskName);
  });
});
