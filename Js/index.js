const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const sideBtn = document.querySelector(".left-menu");
const sideBar = document.querySelector(".side-bar");
function showSide() {
  if (sideBar.style.display === "none") {
    sideBar.style.display = "block";
  } else if (sideBar.style.display === "block") {
    sideBar.style.display = "none";
  }
}
