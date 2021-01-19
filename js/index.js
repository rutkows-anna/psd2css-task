const gridGap = 20,
slide = document.querySelector(".box"),
slider = document.querySelector(".slider__wrapper"),
arrows = document.querySelectorAll(".slider__arrow"),
prev = arrows[0],
next = arrows[1];

next.addEventListener("click", () => {
  slider.scrollBy(width + gridGap, 0);
});

prev.addEventListener("click", () => {
  slider.scrollBy(-(width + gridGap ), 0);
});

let width = slide.offsetWidth;
window.addEventListener("resize", () => (width));