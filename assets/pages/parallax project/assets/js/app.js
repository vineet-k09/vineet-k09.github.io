let mainText = document.getElementById("Mtext");
let jSparrowImg = document.getElementById("jSparrow");

window.addEventListener("scroll", f => {
  let value = window.scrollY;
  mainText.style.marginRight = value * 4 + "px";
  mainText.style.marginTop = value * 1  + "px";     
})

window.addEventListener("scroll", e => {
    let value2 = window.scrollY;
    jSparrowImg.style.marginTop = value2 + "px";
    let scaleValue = (value2 * 0.5) / 100;
    jSparrowImg.style.transform = "scale(" + scaleValue + ")";
})
