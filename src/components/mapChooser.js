let mapChooser = loationName => {
  if (!loationName) {
    loationName = "none";
  }
  let imageName = loationName + ".png";
  return imageName;
};

export default mapChooser;
