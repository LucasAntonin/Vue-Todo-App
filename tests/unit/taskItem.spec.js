import { shallowMount } from "@vue/test-utils";
import TaskItem from "@/components/TaskItem.vue";

describe("TaskItem.vue", () => {
  const task = {
    id: 1,
    name: "Test Task",
    editing: false,
    done: false,
  };

  test("renders the component", () => {
    const wrapper = shallowMount(TaskItem, {
      propsData: {
        task,
        onDeleteTasks: () => {},
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  test("emits 'onDeleteTasks' event when delete button is clicked", async () => {
    const onDeleteTasks = jest.fn();
    const wrapper = shallowMount(TaskItem, {
      propsData: {
        task,
        onDeleteTasks,
      },
    });
    await wrapper.find(".text-red-500").trigger("click");
    expect(onDeleteTasks).toHaveBeenCalledWith(task);
  });
});
