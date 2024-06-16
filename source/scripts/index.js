import { sliderElement } from './slider';
import { onSliderUpdate } from './price';
import { burgerToogle, onBurgerMenuEscKeydown, burgerButton } from './burger-menu';

sliderElement.noUiSlider.on('update', onSliderUpdate);
burgerButton.addEventListener('click', burgerToogle);
burgerButton.addEventListener('keydown', onBurgerMenuEscKeydown);
