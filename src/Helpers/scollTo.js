const scrollTo = (pixels) => {
  window.scrollBy({
    top: pixels,
    left: 0,
    behavior: "smooth"
  });
}

export default scrollTo;