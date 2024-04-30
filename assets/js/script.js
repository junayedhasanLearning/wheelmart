const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const navbar = document.querySelector("header nav");
  navbar.classList.toggle("active");
});

// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "fade",
});
