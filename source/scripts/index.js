import { sliderElement } from './slider';
import { onSliderUpdate } from './price';
import { burgerToogle, onBurgerMenuEscKeydown, burgerButton } from './burger-menu';
import { onChangeSlide } from './hero-slider';

sliderElement.noUiSlider.on('update', onSliderUpdate);
burgerButton.addEventListener('click', burgerToogle);
burgerButton.addEventListener('keydown', onBurgerMenuEscKeydown);
onChangeSlide(0);
