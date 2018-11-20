import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Footer from "@/common/Footer.vue";
import "../util";

describe("页脚", () => {
  const wrapper = shallowMount(Footer);

  it("显示正确的标语", () => {
    const slogan = wrapper.find("h2");
    expect(slogan.text()).to.equal("一场伟大理想   一段无悔青春");
  });
});
