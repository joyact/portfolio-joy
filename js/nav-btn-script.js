// Begin - Toggling theme
// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
    document.getElementById('theme').checked = true;
  } else {
    setTheme('theme-light');
    document.getElementById('theme').checked = false;
  }
})();
// End - Toggling theme

// Begin - Toggling side menu on mobile
const navSlide = () => {
  const burgerBtn = document.querySelector('.burger-btn');
  const nav = document.querySelector('.nav-links');
  const main = document.querySelector('main');
  const foot = document.querySelector('footer');

  burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-active'); //toggle navigation
    burgerBtn.classList.toggle('close'); //burger animateion
    main.classList.toggle('opacity');
    foot.classList.toggle('opacity');
  });
};
navSlide();
// End - Toggling side menu on mobile
