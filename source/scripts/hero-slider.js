const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider__slide');
const buttons = document.querySelectorAll('.slider__pagination-button');
const prevButton = document.querySelector('.slider__button--previous');
const nextButton = document.querySelector('.slider__button--next');
const heroBg = document.querySelector('.hero__wrapper');

let currentSlideIndex = 0;

function updateBackground(slideIndex) {
  const backgroundColors = ['#f3ebe1', '#eae6fc', '#e5e6e8'];
  heroBg.style.backgroundColor = backgroundColors[slideIndex] || backgroundColors[0];
}

function onChangeSlide(newIndex) {
  slides[currentSlideIndex].classList.remove('slider__slide--current');
  buttons[currentSlideIndex].parentNode.classList.remove('slider__pagination-item--current');

  currentSlideIndex = newIndex;

  slides[currentSlideIndex].classList.add('slider__slide--current');
  buttons[currentSlideIndex].parentNode.classList.add('slider__pagination-item--current');
  updateBackground(currentSlideIndex);
}

prevButton.addEventListener('click', () => {
  const newIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  onChangeSlide(newIndex);
});

nextButton.addEventListener('click', () => {
  const newIndex = (currentSlideIndex + 1) % slides.length;
  onChangeSlide(newIndex);
});

slider.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('slider__pagination-button')) {
    const newActiveIndex = Array.from(buttons).indexOf(evt.target);
    onChangeSlide(newActiveIndex);
  }
});

export { onChangeSlide };
