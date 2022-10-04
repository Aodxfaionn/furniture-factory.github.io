const btnPrev = document.querySelector(".slider__button--prev");
const btnNext = document.querySelector(".slider__button--next");
const slider = document.querySelector(".slider__list");

let left = 0;
let imgWidth = 1180;

const slideClick = (side) => {
  if (side == "left") {
    left -= imgWidth;
  } else {
    left += imgWidth;
  }

  if (left < -3540) {
    left = 0;
  }

  if (left > 0) {
    left = -3540;
  }

  slider.style.left = left + "px";
};

btnPrev.addEventListener("click", () => {
  slideClick("right");
});

btnNext.addEventListener("click", () => {
  slideClick("left");
});
