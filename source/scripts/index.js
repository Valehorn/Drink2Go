import { sliderElement } from './slider';

const onSliderUpdate = () => {
  const priceInputFrom = document.querySelector('#price-from');
  const priceInputTo = document.querySelector('#price-to');
  const sliderValue = sliderElement.noUiSlider.get(true);
  priceInputFrom.value = sliderValue[0];
  priceInputTo.value = sliderValue[1];
};

sliderElement.noUiSlider.on('update', onSliderUpdate);
