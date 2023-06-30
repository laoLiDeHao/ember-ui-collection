const resizeFontsize = (e,designWidth,base) => {
  console.log(e);
  let tempsize = base / designWidth;
  let width = e.target.window.innerWidth;
  let fontSize = tempsize * width;
  // if (fontSize < 10) fontSize = 10;
  document.documentElement.style.fontSize = fontSize + "px";
  console.log(document.documentElement.style.fontSize);
}


const windowHandler = {
  resizeFontsize
}

export default windowHandler