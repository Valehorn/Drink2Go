const navMobileWrapper = document.querySelector('.header__nav-wrapper');
const burgerButton = document.querySelector('.header__nav-button-burger');

const onBurgerMenuEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    navMobileWrapper.classList.remove('header__nav-wrapper--open');
    burgerButton.classList.remove('header__nav-button-burger--close');
    burgerButton.classList.add('header__nav-button-burger--open');
    closeBurgerMenu();
  }
};

const burgerToogle = () => {
  navMobileWrapper.classList.toggle('header__nav-wrapper--open');
  burgerButton.classList.toggle('header__nav-button-burger--open');
  burgerButton.classList.toggle('header__nav-button-burger--close');
  document.addEventListener('keydown', onBurgerMenuEscKeydown);
};

function closeBurgerMenu() {
  document.removeEventListener('keydown', onBurgerMenuEscKeydown);
}

export { burgerToogle, onBurgerMenuEscKeydown, burgerButton };
