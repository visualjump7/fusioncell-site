/* Home page interactions */
(function () {
  'use strict';

  // Smooth scroll for hero CTA if linking to same-page anchor
  var heroScroll = document.querySelector('.hero__scroll');
  if (heroScroll) {
    heroScroll.style.cursor = 'pointer';
    heroScroll.addEventListener('click', function () {
      var nextSection = document.querySelector('.hero + .section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
})();
