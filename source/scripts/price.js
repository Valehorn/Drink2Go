import { sliderElement } from './slider';

const onSliderUpdate = (sliderValue) => {
  const priceInputFrom = document.querySelector('#price-from');
  const priceInputTo = document.querySelector('#price-to');
  sliderValue = sliderElement.noUiSlider.get(true);
  priceInputFrom.value = sliderValue[0];
  priceInputTo.value = sliderValue[1];
};

export {onSliderUpdate};
