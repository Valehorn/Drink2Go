const upButton = document.querySelector('.up-button');

const onUpButtonScroll = () => {
  window.scrollTo(0, 0);
};


function onWindowScroll () {
  if (window.pageYOffset > 2300) {
    upButton.addEventListener('click', onUpButtonScroll);
    upButton.classList.add('up-button--shown');
  } else {
    upButton.removeEventListener('click', onUpButtonScroll);
    upButton.classList.remove('up-button--shown');
  }
}

const windowScroll = () => {
  window.addEventListener('scroll', onWindowScroll);
};


export {windowScroll};

