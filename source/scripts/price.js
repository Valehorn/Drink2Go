import { sliderElement } from './slider';

const priceInputFrom = document.querySelector('#price-from');
const priceInputTo = document.querySelector('#price-to');

const onSliderUpdate = () => {
  const [valueLower, valueUpper] = sliderElement.noUiSlider.get(true);
  priceInputFrom.value = valueLower;
  priceInputTo.value = valueUpper;
};


const onSliderElementUpdate = (values, handle) => {
  const value = values[handle];
  if (handle === 0) {
    priceInputFrom.value = value;
  } else {
    priceInputTo.value = value;
  }
};

sliderElement.noUiSlider.on('update', onSliderElementUpdate);

const onInputFromChange = () => {
  sliderElement.noUiSlider.set([priceInputFrom.value, null]);
};

const onInputToChange = () => {
  sliderElement.noUiSlider.set([null, priceInputTo.value]);
};

priceInputFrom.addEventListener('change', onInputFromChange);
priceInputTo.addEventListener('change', onInputToChange);

export { onSliderUpdate };
