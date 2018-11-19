import { expect } from "chai";
import { shallowMount, mount, createLocalVue, config } from "@vue/test-utils";
import Login from "@/common/user/Login.vue";
import Vuex from "vuex";
// import "../util";
import sinon from "sinon";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

config.stubs.transition = false;

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(ElementUI);

describe.skip("Login", () => {
  const spy = sinon.spy();
  const wrapper = mount(Login, {
    localVue,
    mocks: {
      $store: {
        state: {
          isLogged: false
        }
      }
    },
    methods: {
      handle_submit: spy
    },
    stubs: ["router-link"]
  });

  it.skip("输入框失焦后触发验证", () => {
    // const inputPassport = wrapper.find("#passportInput");
    // // console.log(inputPassport.name());
    // inputPassport.vm.$emit("blur");
    // console.log(inputPassport.vm.emitted().blur);
  });

  it("点击登录后触发handle_submit方法", () => {
    const button = wrapper.find("#login");
    button.trigger("click");
    expect(spy.calledWith()).to.be.ok;
  });
});
