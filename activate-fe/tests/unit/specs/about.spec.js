import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import About from "@/views/about/About.vue";
import "../util";

describe("关于", () => {
  const wrapper = shallowMount(About);

  it("正确显示历程概述卡片", () => {
    const spans = wrapper.findAll("span");
    expect(spans.at(0).text()).to.equal("历程概述");
  });

  it("正确显示成员概况卡片", () => {
    const spans = wrapper.findAll("span");
    expect(spans.at(1).text()).to.equal("成员概况");
  });

  it("正确显示联系方式卡片", () => {
    const spans = wrapper.findAll("span");
    expect(spans.at(2).text()).to.equal("联系方式");
  });
});
