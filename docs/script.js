
function toggleDetail(card) {
  card.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  // typed text
  const phrases = ["Computer Science Student", "Researcher", "Developer"];
  let i = 0;
  const span = document.querySelector(".typed-text");
  setInterval(() => {
    span.textContent = phrases[i];
    i = (i + 1) % phrases.length;
  }, 3000);

  // 背景轮播
  const bgImages = [
    "image/横图滑雪.jpg",
    "image/滑雪.jpg",
    "image/生活照.jpg"
  ];
  let bgi = 0;
  const heroBefore = document.querySelector(".hero::before"); // 无法选中伪元素
  const hero = document.querySelector(".hero");

  setInterval(() => {
    bgi = (bgi + 1) % bgImages.length;
    hero.style.setProperty("--hero-bg", `url('${bgImages[bgi]}')`);
  }, 5000);
});
