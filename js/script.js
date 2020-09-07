/* Start - Tab Effect */
const tabBtn = document.querySelectorAll('.tab-btn li');
const tabContent = document.querySelectorAll('.tabcontent');

tabBtn.forEach(function (el) {
  el.addEventListener('click', openTabs);
});

function openTabs(el) {
  const btnTarget = el.currentTarget;
  const title = btnTarget.dataset.title;

  tabContent.forEach(function (el) {
    el.classList.remove('active');
  });

  tabBtn.forEach(function (el) {
    el.classList.remove('active');
  });

  document.querySelector('#' + title).classList.add('active');

  btnTarget.classList.add('active');
}
// End - Tab Effect

$(function () {
  // Start - Menu Scroll on click
  // setInterval(function () {
  //   if ($('html, body').scrollTop() >= 100) {
  //     $('.sub').animate({ right: 0 });
  //   } else {
  //     $('.sub').animate({ right: -65 });
  //   }
  // }, 1000);

  $('.scroll').click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 600);
  });
  // End - Menu Scroll on click
  // Start - Text Typer
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
    document.body.appendChild(css);
  };
  // End - Text Typer
});
