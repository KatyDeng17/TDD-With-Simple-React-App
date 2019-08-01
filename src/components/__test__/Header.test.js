import React from "react";

import Header from "../Header";
import { shallow } from "enzyme";

describe("Header", () => {
  let mountedHeader;
  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });
  it("renders without crashing", () => {
    shallow(<Header />);
  });
  it("renders a logo image", () => {
    const logoImage = mountedHeader.find("img").prop("src");
    expect(logoImage).toEqual("images/wired-brain-coffee-logo.png");
  });
});
