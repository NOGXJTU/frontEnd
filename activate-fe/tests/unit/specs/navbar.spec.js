import { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Navbar from "@/components/navbar.vue";
import "../util";

describe("navbar.vue", () => {
  const mocks = {
    $store: {
      state: {
        isLogged: false
      }
    }
  };
  const wrapper = shallowMount(Navbar, { mocks: mocks });

  it("show only login/register when not logged", () => {
    expect(wrapper.find('[index="log"]').exists()).to.be.ok;
    expect(wrapper.find('[index="logout"]').exists()).to.not.be.ok;
  });

  it("show only logout when logged in", () => {
    const mocks = {
      $store: {
        state: {
          isLogged: true
        }
      }
    };
    const wrapper = shallowMount(Navbar, { mocks: mocks });

    expect(wrapper.find('[index="log"]').exists()).to.not.be.ok;
    expect(wrapper.find('[index="logout"]').exists()).to.be.ok;
  });
});
