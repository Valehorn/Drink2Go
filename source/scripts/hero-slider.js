const slider = document.querySelector('.slider');
const sliderElement = document.querySelectorAll('.slider__slide');
const paginationButtons = document.querySelectorAll('.slider__pagination-button');
const prevButton = document.querySelector('.slider__button--previous');
const nextButton = document.querySelector('.slider__button--next');
const heroBg = document.querySelector('.hero__wrapper');

let currentSlideIndex = 0;

const updateBackground = (slideIndex) => {
  const backgroundColors = ['#f3ebe1', '#eae6fc', '#e5e6e8'];
  heroBg.style.backgroundColor = backgroundColors[slideIndex] || backgroundColors[0];
};

const onChangeSlide = (newIndex) => {
  sliderElement[currentSlideIndex].classList.remove('slider__slide--current');
  paginationButtons[currentSlideIndex].parentNode.classList.remove('slider__pagination-item--current');

  currentSlideIndex = newIndex;

  sliderElement[currentSlideIndex].classList.add('slider__slide--current');
  paginationButtons[currentSlideIndex].parentNode.classList.add('slider__pagination-item--current');
  updateBackground(currentSlideIndex);
};

prevButton.addEventListener('click', () => {
  const newIndex = (currentSlideIndex - 1 + sliderElement.length) % sliderElement.length;
  onChangeSlide(newIndex);
});

nextButton.addEventListener('click', () => {
  const newIndex = (currentSlideIndex + 1) % sliderElement.length;
  onChangeSlide(newIndex);
});

slider.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('slider__pagination-button')) {
    const newActiveIndex = Array.from(paginationButtons).indexOf(evt.target);
    onChangeSlide(newActiveIndex);
  }
});

export { onChangeSlide };
