import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Regulation from "@/views/regulation/index.vue";
import "../util";
import sinon from "sinon";

describe.only("章程", () => {
  const wrapper = shallowMount(Regulation);
  it("默认显示纲要", () => {
    const activeItem = wrapper.find(".active");
    expect(activeItem.text()).to.contain("纲要");
  });

  it("点击目录项后激活状态转移至该目录项", () => {
    /**
     * 不要测点击按钮之后的UI（样式）变化，测相应的绑定数据。
     * 另外可能由于elementUI包装的缘故，点击该item并没有发出事件
     */
    wrapper.vm.toggle_active(1);
    expect(wrapper.vm.isActive[1]).to.be.ok;
  });

  it("点击目录项后显示对应的章节内容", () => {
    /**
     * 这里不应该基于页面元素寻找h2来测
     * 应该基于vm的变量的值
     * 其中passage对应的是一段文本
     */
    wrapper.vm.handle_content(2);
    expect(wrapper.vm.passage).to.contain("第二章");
  });

  it("toggle_active在点击目录项时被正确调用", () => {
    const spy = sinon.spy();
    // 需要写在methods里面
    const wrapper = shallowMount(Regulation, {
      methods: {
        toggle_active: spy
      }
    });
    // 点击第1项
    wrapper
      .findAll("li")
      .at(1)
      .find(".item")
      .trigger("click");

    expect(spy.calledWith(1)).to.be.ok;
  });

  it("handle_content在点击目录项时被正确调用", () => {
    const spy = sinon.spy();
    // 需要写在methods里面
    const wrapper = shallowMount(Regulation, {
      methods: {
        handle_content: spy
      }
    });
    // 点击第2项
    wrapper
      .findAll("li")
      .at(2)
      .find(".item")
      .trigger("click");

    expect(spy.calledWith(2)).to.be.ok;
  });
});
