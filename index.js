const event = document.querySelector(".event");
event.addEventListener("click", function () {
  $(".details").slideToggle();
});

console.log($(".details").slideUp() == true);
