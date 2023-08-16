const pcBar = document.querySelector("#pc-bar");
const mobBar = document.querySelector("#mobile-nav");
const size = window.innerWidth;
let sizeNum = document.querySelector("p");
sizeNum.innerHTML = innerWidth;
if (size < 800) {
  pcBar.classList.toggle("hidden");
  mobBar.classList.toggle("hidden");
}
