import { sliderElement } from './slider';

const onSliderUpdate = () => {
  const priceInputFrom = document.querySelector('#price-from');
  const priceInputTo = document.querySelector('#price-to');
  const [valueLower, valueUpper] = sliderElement.noUiSlider.get(true);
  priceInputFrom.value = valueLower;
  priceInputTo.value = valueUpper;
};

export {onSliderUpdate};
