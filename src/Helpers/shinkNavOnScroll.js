const shrinkNavOnScroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    return "12.5em";
  } else {
    return "6.25em";
  }
}

export default shrinkNavOnScroll;