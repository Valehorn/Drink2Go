import { sliderElement } from './slider';
import { onSliderUpdate } from './price';
import { burgerToogle, onBurgerMenuEscKeydown, burgerButton } from './burger-menu';
import { onChangeSlide } from './hero-slider';
import { windowScroll } from './up-button';


const bootstrap = (slideNumber) => {
  const mapFrame = document.querySelector('.map__frame');
  mapFrame.classList.remove('map__frame--nojs');
  sliderElement.noUiSlider.on('update', onSliderUpdate);
  burgerButton.addEventListener('click', burgerToogle);
  burgerButton.addEventListener('keydown', onBurgerMenuEscKeydown);
  onChangeSlide(slideNumber);
  windowScroll();
};

bootstrap(0);
