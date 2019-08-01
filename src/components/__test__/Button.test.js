import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

describe("Button", () => {
  let mountedButton;
  beforeEach(() => {
    mountedButton = shallow(<Button />);
  });
  it("renders without crashing", () => {
    shallow(<Button />);
  });
  it("render a html button tag", () => {
    const buttonTag = mountedButton.find("button");
    expect(buttonTag.length).toBe(1);
  });

  it("call a function passed to it when clicked", () => {
    const mockCallBack = jest.fn();
    const mountedButtonWithCallback = shallow(
      <Button handleClick={mockCallBack} />
    );
    mountedButtonWithCallback.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});

describe("When a location is passed to it", () => {
  let mountedButton;
  let props;
  beforeEach(() => {
    props = {
      location: "location1"
    };
    mountedButton = shallow(<Button {...props} />);
  });
  it("displays the location", () => {
    const locationName = mountedButton.find(".location-button"); //find('className');
    expect(locationName.text()).toEqual("location1"); //testing via the props here but the actual props are not passing
  });
});

describe("When no location is passed to it", () => {
  let mountedButton;
  let props;
  beforeEach(() => {
    props = {
      location: undefined
    };
    mountedButton = shallow(<Button {...props} />);
  });
  it("displays the location", () => {
    const locationName = mountedButton.find(".location-button"); //find('className');
    expect(locationName.text()).toEqual("All Locations"); //testing via the props here but the actual props are not passing
  });
});
