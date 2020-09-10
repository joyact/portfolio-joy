const imgSlider = document.getElementById('imgSlider');
const imgWrapper = document.querySelector('.slides');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const interval = 3000;

let slideId;
let index = 1;
let slide = document.querySelectorAll('.slide');
const slideWidth = slide[index].clientWidth;

// cloning happens after DOM is loaded
const firstClone = slide[0].cloneNode(true);
const lastClone = slide[slide.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';
imgWrapper.append(firstClone);
imgWrapper.prepend(lastClone);
imgWrapper.style.transform = `translateX(${-slideWidth * index}px)`;

const getSlides = () => document.querySelectorAll('.slide');

const moveToNextSlide = () => {
  slide = getSlides();
  if (index >= slide.length - 1) return;
  index++;
  imgWrapper.style.transform = `translateX(${-slideWidth * index}px)`;
  imgWrapper.style.transition = '.7s';
};

const moveToPreviousSlide = () => {
  slide = getSlides();
  if (index <= 0) return;
  index--;
  imgWrapper.style.transform = `translateX(${-slideWidth * index}px)`;
  imgWrapper.style.transition = '.7s';
};

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

imgWrapper.addEventListener('transitionend', () => {
  //reselect slide to call back
  slide = getSlides();
  switch (slide[index].id) {
    case 'first-clone':
      imgWrapper.style.transition = 'none';
      index = 1;
      imgWrapper.style.transform = `translateX(${-slideWidth * index}px)`;
      break;
    case 'last-clone':
      imgWrapper.style.transition = 'none';
      index = slide.length - 2;
      imgWrapper.style.transform = `translateX(${-slideWidth * index}px)`;
      break;
  }
});

imgSlider.addEventListener('mouseover', () => {
  clearInterval(slideId);
});

imgSlider.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);
startSlide();
