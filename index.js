

 AFRAME.registerComponent('btn-hover', {
  init: function () {
    const el = this.el;
    const face = el.querySelector('#btn-face');
    let mouseDownTime = 0;
    const CLICK_MAX_DURATION = 200; // ms — arrasto demora mais que isso

    el.addEventListener('mouseenter', () => {
      face.setAttribute('material', 'color', '#4A1FFF');
      el.setAttribute('animation__scale', {
        property: 'scale',
        to: '1.08 1.08 1',
        dur: 200,
        easing: 'easeOutQuad'
      });
    });

    el.addEventListener('mouseleave', () => {
      face.setAttribute('material', 'color', '#2C0DBD');
      el.setAttribute('animation__scale', {
        property: 'scale',
        to: '1 1 1',
        dur: 200,
        easing: 'easeOutQuad'
      });
    });

    el.addEventListener('mousedown', () => {
      mouseDownTime = Date.now();
    });

    el.addEventListener('mouseup', () => {
      const duration = Date.now() - mouseDownTime;
      if (duration < CLICK_MAX_DURATION) {
        window.location.href = 'menu.html';
      }
    });

    // Bloqueia o click nativo do A-Frame
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const portal = document.querySelector('.clickable');
  portal.addEventListener('click', () => {
    window.location.href = "https://www.youtube.com/watch?v=Zy06y9lH7zE";
  });
});