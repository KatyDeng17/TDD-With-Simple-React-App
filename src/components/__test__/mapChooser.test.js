import mapChooser from "../mapChooser";

describe("mapChooser", () => {
  it("returns an file name based on input given to it", () => {
    let expected = "portland.png";
    let actual = mapChooser("portland");
    expect(actual).toEqual(expected);
  });
  it("returns an default image as none.png when no input is given", () => {
    let expected = "none.png";
    let actual = mapChooser("");
    expect(actual).toEqual(expected);
  });
});
