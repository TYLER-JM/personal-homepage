const animateMenu = (event, callback, data) => {
  console.log(event.currentTarget.firstChild.innerHTML);
  callback(data);
}

export default animateMenu;