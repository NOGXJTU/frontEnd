import { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/components/home.vue";
import "../util";

describe("home.vue", () => {
  const wrapper = shallowMount(Home);

  it("显示banner", () => {
    expect(wrapper.contains(".banner")).to.be.ok;
  });

  it("显示介绍标题", () => {
    const introTitle = wrapper.find(".intro-title");
    expect(introTitle.text()).to.include("筑梦者义教组织");
  });

  it("显示介绍内容", () => {
    const introContent = wrapper.find(".intro-content");
    expect(introContent.text()).to.include("not only a dreamer");
  });

  it("显示近期活动区域标题", () => {
    const activityTitle = wrapper.find(".activity-title");
    expect(activityTitle.text()).to.include("近期活动");
  });

  it("显示地图", () => {
    expect(wrapper.contains(".map")).to.be.ok;
  });

  it.skip("显示地图标题", () => {
    const mapTitle = wrapper.find(".map-caption-title");
    expect(mapTitle.text()).to.include("应该要什么标题");
  });

  it("显示口号", () => {
    const footer = wrapper.findAll(".footer-content .fl-content");
    const word0 = footer.at(0);
    expect(word0.text()).to.include("一");

    const word1 = footer.at(6);
    expect(word1.text()).to.include("春");
  });
});
