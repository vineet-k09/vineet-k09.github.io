let mainText = document.getElementById("Mtext");
let mansionImg = document.getElementById("mansion");

window.addEventListener("scroll", f => {
  let value = window.scrollY;
  mainText.style.marginRight = value * 4 + "px";
  mainText.style.marginTop = value * 1  + "px";     
})

window.addEventListener("scroll", e => {
    let value2 = window.scrollY;
    mansionImg.style.marginTop = value2 + "px";
    let scaleValue = (value2 * 0.2) / 100;
    mansionImg.style.transform = "scale(" + scaleValue + ")";
})
