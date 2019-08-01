import React from "react";
import { shallow } from "enzyme";
import Map from "../Map";

describe("Map", () => {
  let mountedMap;
  let props;
  beforeEach(() => {
    props = {
      location: undefined,
      imagename: "testmap.png"
    };
    mountedMap = shallow(<Map {...props} />);
  });

  it("renders without crashing", () => {
    shallow(<Map />);
  });
  it("renders an image", () => {
    const images = mountedMap.find("img");
    expect(images.length).toBe(1);
  });

  it("displays the none.png map when no params are given to it", () => {
    let defaultImage = shallow(<Map />);
    const defaultMap = defaultImage.find("img").prop("src");
    expect(defaultMap).toBe("images/none.png");
  });

  it("display the map imagename passed to it", () => {
    const testMap = mountedMap.find("img").prop("src");
    expect(testMap).toBe("images/testmap.png");
  });
});
