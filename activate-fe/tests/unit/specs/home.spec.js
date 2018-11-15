import { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/components/home.vue";
import "../util";

describe("home.vue", () => {
  const wrapper = shallowMount(Home);

  it("show banner", () => {
    expect(wrapper.contains(".banner")).to.be.ok;
  });

  it("show introduction title", () => {
    const introTitle = wrapper.find(".intro-title");
    expect(introTitle.text()).to.include("筑梦者义教组织");
  });

  it("show introduction content", () => {
    const introContent = wrapper.find(".intro-content");
    expect(introContent.text()).to.include("not only a dreamer");
  });

  it("show activity title", () => {
    const activityTitle = wrapper.find(".activity-title");
    expect(activityTitle.text()).to.include("近期活动");
  });

  it("show map", () => {
    expect(wrapper.contains(".map")).to.be.ok;
  });

  it.skip("show map title", () => {
    const mapTitle = wrapper.find(".map-caption-title");
    expect(mapTitle.text()).to.include("应该要什么标题");
  });

  it("show slogan", () => {
    const footer = wrapper.findAll(".footer-content .fl-content");
    const word0 = footer.at(0);
    expect(word0.text()).to.include("一");

    const word1 = footer.at(6);
    expect(word1.text()).to.include("春");
  });
});
