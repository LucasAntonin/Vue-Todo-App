import { shallowMount } from "@vue/test-utils";
import Tasks from "@/components/Tasks.vue";

describe("Tasks.vue", () => {
  test("renders the component", () => {
    const wrapper = shallowMount(Tasks);
    expect(wrapper.exists()).toBe(true);
  });
});
