import { shallowMount } from "@vue/test-utils";
import ToDoList from "@/components/ToDoList.vue";

describe("ToDoList.vue", () => {
  test("renders the component", () => {
    const wrapper = shallowMount(ToDoList);
    expect(wrapper.exists()).toBe(true);
  });
});
