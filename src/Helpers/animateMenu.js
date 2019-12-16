const animateMenu = (event, callback) => {
  console.log(event.currentTarget.firstChild.innerHTML);
  callback(event.currentTarget.firstChild.innerHTML);
}

export default animateMenu;