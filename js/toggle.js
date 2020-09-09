const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

function toggleTemplate(elem, addclass) {
  if (elem.length > 1) {
    elem.forEach((item) => {
      item.classList.toggle(addclass);
    });
  } else {
    elem.classList.toggle(addclass);
  }
}

const changeTheme = () => {
  const body = document.querySelector('.theme');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const section = document.querySelectorAll('section');
  const oddsection = document.querySelectorAll('.section');
  const box = document.querySelectorAll('.project-box figcaption');
  const link = document.querySelectorAll('a');
  const p = document.querySelectorAll('p');
  const img = document.querySelectorAll('img');
  console.dir(footer.localName);

  toggleTemplate(body, 'dark-all');
  toggleTemplate(header, 'dark-bg-1');
  toggleTemplate(footer, 'dark-bg-footer');

  toggleTemplate(section, 'dark-bg-1');
  toggleTemplate(oddsection, 'dark-bg-2');
  toggleTemplate(box, 'dark-bg-2');
  toggleTemplate(img, 'dark-img-opacity');
  toggleTemplate(link, 'dark-color');
  toggleTemplate(p, 'dark-p-color');
};

const toggleHandler = () => {
  const toggleBtn = document.querySelector('#toggle-btn');
  const toggleCheckbox = document.getElementById('toggle-btn').getElementsByTagName('input')[0];

  let isDark = getParameterByName('darkMode') === 'true';

  if (isDark) {
    toggleCheckbox.checked = true;
    changeTheme();
  }

  toggleBtn.addEventListener(
    'click',
    function () {
      isDark = !isDark;
      changeTheme();
    },
    false
  );

  for (var i = 0, anchors = document.getElementsByTagName('a'); i < anchors.length; ++i) {
    anchors[i].addEventListener('click', function (e) {
      if (e.target.href.startsWith('https://')) {
        e.preventDefault();
        window.location.href = e.target.href + '?darkMode=' + isDark;
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', toggleHandler, false);
