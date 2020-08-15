import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import { SuggestedSong } from "./SuggestedSong";
import { songs } from "../../../../mocks";

Enzyme.configure({ adapter: new Adapter() });

const playSongTest = () => {};

describe("<SuggestedSong/>", () => {
  it("Should render suggested songs", () => {
    const wrapper = shallow(
      <SuggestedSong songs={songs} playSong={playSongTest} />
    );
    expect(wrapper.find(".suggested-title")).toHaveLength(1);
    expect(wrapper.find(".song-name")).toHaveLength(songs.length);
  });

  it("should show item not found message", () => {
    const wrapper = shallow(
      <SuggestedSong songs={songs} playSong={playSongTest} />
    );
    expect(wrapper.find(".file-not-found").text()).toBe("No Encontrado");
  });

});
