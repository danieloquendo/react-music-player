import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import { Player } from "./Player";
import { song } from "../../mocks";

Enzyme.configure({ adapter: new Adapter() });

describe("<Player/>", () => {
  it("Should render song", () => {
    const wrapper = shallow(
      <Player
        songDuration={song.duration_ms}
        songImage={song.preview_url}
        songName={song.name}
        songUrl={song.preview_url}
      />
    );
    expect(wrapper.find(".footer")).toHaveLength(1);
    expect(wrapper.find(".song-title").text()).toBe(song.name);
  });

  it("Should not render song", () => {
    const wrapper = shallow(
      <Player
        songDuration={song.duration_ms}
        songImage={song.preview_url}
        songName={song.name}
        songUrl=""
      />
    );
    expect(wrapper.find(".footer")).toHaveLength(0);
  });
});
