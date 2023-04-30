import { shallowMount } from "@vue/test-utils";
import TaskAddForm from "@/components/TaskAddForm.vue";

describe("TaskAddForm.vue", () => {
  test("renders the component", () => {
    const wrapper = shallowMount(TaskAddForm);
    expect(wrapper.exists()).toBe(true);
  });

  test("emits 'on-add-task' event with new task data when form is submitted", async () => {
    const wrapper = shallowMount(TaskAddForm);
    const input = wrapper.find("input");
    const newTaskName = "New Task";

    input.setValue(newTaskName);
    await wrapper.find("form").trigger("submit.prevent");

    const emitted = wrapper.emitted("on-add-task");
    expect(emitted).toBeTruthy();
    expect(emitted[0][0].name).toBe(newTaskName);
  });
});
