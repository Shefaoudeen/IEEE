const pcBar = document.querySelector("#pc-bar");
const mobBar = document.querySelector("#mobile-nav");
const size = window.innerWidth;

if (size < 800) {
  pcBar.classList.add("hidden");
  mobBar.classList.remove("hidden");
}
