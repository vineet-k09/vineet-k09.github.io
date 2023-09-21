let mainText = document.getElementById("mainText");
let introText = document.getElementById("introText");
let doorBox = document.getElementById("doorBox");
let mainDoor = document.getElementById("mainDoor");
let doorFrame = document.getElementById("doorFrame");
let previousScrollY = 0;
function updateAnimations() {
  let value = window.scrollY;
  if (value <= 1700) {
    mainText.style.marginTop = value * 1 + "px";
  }
  mainText.style.right = value * 4 + "px";
  introText.style.opacity = 1 - value * 0.007;
  if (value >= 2100) {
    let rotation = -(value - 2100) * 0.3;
    rotation = Math.max(-150, rotation);
    mainDoor.style.transform = `rotateY(${rotation}deg)`;
  } else {
    mainDoor.style.transform = `rotateY(0deg)`;
  }
  if (value >= 2300 && value <= 10000) {
    let val = 2100 - value;
    doorFrame.style.marginTop = -val + "px";
    if (-val >= 1550) {
      let scale = -(val-3000) / 700;
        if (scale <= 7.5){
          doorFrame.style.transition = "transform 0.3s cubic-bezier(0.47, 0, 0.745, 0.715)";
          doorFrame.style.transform = `scale(${scale})`;
        }
    } else {
      doorFrame.style.transition = "transform 0.5s cubic-bezier(0, 0, 0, 0)";
      scale = 1;
      doorFrame.style.transform = `scale(${scale})`;
    }
  }
}
window.addEventListener("scroll", () => {
  requestAnimationFrame(updateAnimations);
});
