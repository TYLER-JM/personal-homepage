const generateId = (length) => {
  let str = "";
  let count = 1;
  while (count < length) {
    str += String.fromCharCode(Math.floor(Math.random() * 26 + 65))
    count++;
  }
  return str;
}

export default generateId;