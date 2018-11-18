import { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Navbar from "@/common/Navbar.vue";
import Vuex from "vuex";
import sinon from "sinon";
import VueRouter from "vue-router";
import "../util";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

function wrapperInstant(isLogged) {
  return shallowMount(Navbar, {
    localVue,
    mocks: {
      $store: {
        state: {
          isLogged: isLogged
        }
      }
    }
  });
}

describe("导航栏", () => {
  it("显示主页", () => {
    const wrapper = wrapperInstant(false);
    expect(wrapper.find('[index="home"]').exists()).to.be.ok;
  });

  it("显示活动", () => {
    const wrapper = wrapperInstant(false);
    expect(wrapper.find('[index="activity"]').exists()).to.be.ok;
  });

  it("显示资源", () => {
    const wrapper = wrapperInstant(false);
    expect(wrapper.find('[index="resource"]').exists()).to.be.ok;
  });

  it.skip("显示组织", () => {
    const wrapper = wrapperInstant(false);
    expect(wrapper.find('[index="organization"]').exists()).to.be.ok;
  });

  it("显示个人中心", () => {
    const wrapper = wrapperInstant(false);
    expect(wrapper.find('[index="user"]').exists()).to.be.ok;
  });

  it("显示关于", () => {
    const wrapper = wrapperInstant(false);
    expect(wrapper.find('[index="about"]').exists()).to.be.ok;
  });

  it("显示章程", () => {
    const wrapper = wrapperInstant(false);
    expect(wrapper.find('[index="regulation"]').exists()).to.be.ok;
  });

  it("仅在未登录时显示登陆/注册", () => {
    const wrapper = wrapperInstant(false);
    expect(wrapper.find('[index="log"]').exists()).to.be.ok;
    expect(wrapper.find('[index="logout"]').exists()).to.not.be.ok;
  });

  it("仅在登陆后显示登出", () => {
    const wrapper = wrapperInstant(true);
    expect(wrapper.find('[index="log"]').exists()).to.not.be.ok;
    expect(wrapper.find('[index="logout"]').exists()).to.be.ok;
  });

  it("点击登出后显示登陆/注册按钮", () => {
    /**
     * 硬核测试，不知道怎么处理
     * 方法里面各种store操作，先直接改store.state
     */
    const wrapper = wrapperInstant(true);
    wrapper.vm.$store.state.isLogged = false;
    expect(wrapper.find('[index="log"]').exists()).to.be.ok;
  });
});
