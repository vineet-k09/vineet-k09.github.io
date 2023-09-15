let mainText = document.getElementById("mainText");
let introText = document.getElementsByClassName("introText")

window.addEventListener("scroll", f => {
  let value = window.scrollY;
  mainText.style.right = value * 4 + "px";
  mainText.style.marginTop = value * 1 + "px"; 
})