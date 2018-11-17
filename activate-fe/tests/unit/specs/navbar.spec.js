import { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Navbar from "@/components/navbar.vue";
import Vuex from "vuex";
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

describe.skip("navbar.vue", () => {
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

  it("显示组织", () => {
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
});
