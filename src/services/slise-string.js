const sliceString = (text) => {
  if (text.length >= 25) {
    const slisedTitle = text.slice(0, 25);
    return slisedTitle + "...";
  }
  return text;
};
export default sliceString;
