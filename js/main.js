/* Fusion Cell — Main JS */
(function () {
  'use strict';

  /* ---- Mobile Menu ---- */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Nav Scroll ---- */
  const nav = document.querySelector('.nav');

  if (nav) {
    function onScroll() {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Scroll Reveal (smooth scroll-progress driven) ---- */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('revealed');
    });
  } else {
    var TRANSLATE_PX = 56;
    var START_LINE = 0.92;
    var END_LINE = 0.42;
    var STAGGER_OFFSET = 0.09;
    var SMOOTHING = 0.18;
    var MIN_DELTA = 0.001;

    var tracked = [];

    document.querySelectorAll('.reveal').forEach(function (el) {
      var staggerIndex = 0;
      if (el.parentElement && el.parentElement.classList.contains('reveal-stagger')) {
        var siblings = el.parentElement.children;
        for (var i = 0; i < siblings.length; i++) {
          if (siblings[i] === el) { staggerIndex = i; break; }
        }
      }
      tracked.push({ el: el, staggerIndex: staggerIndex, progress: 0 });
    });

    function clamp(value, min, max) {
      return Math.max(min, Math.min(max, value));
    }

    function easeOutCubic(value) {
      return 1 - Math.pow(1 - value, 3);
    }

    function getTargetProgress(rect) {
      var vh = window.innerHeight;
      var start = vh * START_LINE;
      var end = vh * END_LINE;
      var raw = (start - rect.top) / (start - end);
      return clamp(raw, 0, 1);
    }

    function tick() {
      var hasMotion = false;
      var i = tracked.length;

      while (i--) {
        var item = tracked[i];
        var rect = item.el.getBoundingClientRect();
        var target = getTargetProgress(rect) - item.staggerIndex * STAGGER_OFFSET;
        target = clamp(target, 0, 1);

        item.progress += (target - item.progress) * SMOOTHING;
        if (Math.abs(target - item.progress) < MIN_DELTA) {
          item.progress = target;
        } else {
          hasMotion = true;
        }

        var eased = easeOutCubic(item.progress);
        item.el.style.opacity = eased.toFixed(3);
        item.el.style.transform = 'translate3d(0, ' + (((1 - eased) * TRANSLATE_PX).toFixed(2)) + 'px, 0)';

        if (target >= 1 && item.progress >= 0.995) {
          item.el.classList.add('revealed');
          item.el.style.opacity = '';
          item.el.style.transform = '';
          tracked.splice(i, 1);
        }
      }

      return hasMotion;
    }

    var rafId = null;

    function scheduleTick() {
      if (rafId !== null) {
        return;
      }

      rafId = requestAnimationFrame(function () {
        rafId = null;
        var hasMotion = tick();

        if (hasMotion && tracked.length) {
          scheduleTick();
        }
      });
    }

    window.addEventListener('scroll', scheduleTick, { passive: true });
    window.addEventListener('resize', scheduleTick);
    window.addEventListener('load', scheduleTick);

    scheduleTick();
  }
})();
