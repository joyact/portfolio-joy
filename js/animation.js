// Start - Name Flow Effect
const textAnimation = () => {
  const textWrapper = document.querySelector('.animate-flow .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime
    .timeline({ loop: true })
    .add({
      targets: '.animate-flow .letter',
      rotateY: [-90, 0],
      duration: 5000,
      delay: (el, i) => 45 * i,
    })
    .add({
      targets: '.animate-flow',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 1000,
    });
};
document.addEventListener('DOMContentLoaded', textAnimation, false);
// End - Name Flow Effect

// Start - Scroll FadeIN Effect
const animateHTML = function () {
  let elems, windowHeight;

  const init = function () {
    elems = document.getElementsByClassName('hidden');
    windowHeight = window.innerHeight;
    _addEventHandlers();
  };

  const _addEventHandlers = function () {
    window.addEventListener('scroll', _checkPosition);
    window.addEventListener('resize', init);
  };

  const _checkPosition = function () {
    for (let i = 0; i < elems.length; i++) {
      const posFromTop = elems[i].getBoundingClientRect().top;
      if (posFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace('hidden', 'fade-in');
      }
    }
  };

  return {
    init: init,
  };
};
animateHTML().init();
// End - Scroll FadeIN Effect
