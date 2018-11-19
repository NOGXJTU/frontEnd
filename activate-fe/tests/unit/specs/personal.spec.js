import { expect } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import Personal from "@/views/personal/index.vue";
import "../util";
import Vuex from "vuex";
const localVue = createLocalVue();
localVue.use(Vuex);

function wrapperInstant(superUser) {
  return mount(Personal, {
    localVue,
    mocks: {
      $store: {
        state: {
          userInfo: { superUser: superUser }
        }
      }
    }
  });
}

describe("个人中心", () => {
  it("正确显示基本信息菜单项", () => {
    const wrapper = wrapperInstant(false);
    const spans = wrapper.findAll("span");
    expect(spans.at(0).text()).to.equal("基本信息");
  });

  it("正确显示基本信息菜单项", () => {
    const wrapper = wrapperInstant(false);
    const spans = wrapper.findAll("span");
    expect(spans.at(1).text()).to.equal("我的活动");
  });
});
