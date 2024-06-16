import { sliderElement } from './slider';
import { onSliderUpdate } from './price';

sliderElement.noUiSlider.on('update', onSliderUpdate);
