import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import { Header } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("<Header/>", () => {    
  it("Should render header", () => {
    const wrapper = shallow(
      <Header
        lefTitle="Test-Title-left"
        rightTitle="Test-Title-right"
      />
    );
    expect(wrapper.find(".app-header")).toHaveLength(1);
    expect(wrapper.find(".float-lef").text()).toBe("Test-Title-left");
    expect(wrapper.find(".float-right").text()).toBe("Test-Title-right");
  });

});
