const shrinkNavOnScroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("menu").style.padding = "1em 0";
    console.log("we're scrolled down now");
  } else {
    document.getElementById("menu").style.padding = "3em 0";
    console.log("we should be at the top of the page");
  }
}

export default shrinkNavOnScroll;