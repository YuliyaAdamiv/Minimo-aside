'use strict';
const slides = document.querySelectorAll('.slide');
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
const nextSlide = document.querySelector('.btn-next');
let curSlide = 0;
let maxSlide = slides.length - 1;
nextSlide.addEventListener('click', function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
const prevSlide = document.querySelector('.btn-prev');
prevSlide.addEventListener('click', function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

$(document).ready(function () {
  var summaries = $('.aside');
  summaries.each(function (i) {
    var summary = $(summaries[i]);
    var next = summaries[i + 1];

    summary.scrollToFixed({
      marginTop: $('.first').outerHeight(true) + 10,
      limit: function () {
        var limit = 0;
        if (next) {
          limit = $(next).offset().top - $(this).outerHeight(true) - 10;
        } else {
          limit = $('.sign-up').offset().top - $(this).outerHeight(true) - 10;
        }
        return limit;
      },
      zIndex: 999,
    });
  });
});
