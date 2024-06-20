import { sliderElement } from './slider';

const priceInputFrom = document.querySelector('#price-from');
const priceInputTo = document.querySelector('#price-to');

const onSliderUpdate = () => {
  const [valueLower, valueUpper] = sliderElement.noUiSlider.get(true);
  priceInputFrom.value = valueLower;
  priceInputTo.value = valueUpper;
};


const onSliderSlide = (values, handle) => {
  const value = values[handle];
  if (handle === 0) {
    priceInputFrom.value = value;
  } else {
    priceInputTo.value = value;
  }
};

sliderElement.noUiSlider.on('slide', onSliderSlide);

const onInputFrom = () => {
  sliderElement.noUiSlider.set([priceInputFrom.value, null]);
};

const onInputTo = () => {
  sliderElement.noUiSlider.set([null, priceInputTo.value]);
};

priceInputFrom.addEventListener('change', onInputFrom);
priceInputTo.addEventListener('change', onInputTo);

export { onSliderUpdate };
