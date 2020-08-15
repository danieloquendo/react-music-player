import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import { Main } from "./Main";

Enzyme.configure({ adapter: new Adapter() });

describe("<Main/>", () => {
  it("Should render artist list", () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find(".main")).toHaveLength(1);
  });
});
