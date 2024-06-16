const sliderElement = document.querySelector('.order__filter-slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1000,
  },
  start: [0, 900],
  step: 10,
  connect: true,
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseInt(value, 10);
    }
  }
});

export {sliderElement };
