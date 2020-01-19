var siteMenu = document.querySelector('.site-menu');
var siteMenuToggle = document.querySelector('.page-header__toggle');
var link = document.querySelector('.distribution__link-container');
var popup = document.querySelector('.modal');
var close = popup.querySelector('.modal__button');


var getIsDesktop = function () {
  return window.matchMedia("(min-width: 1440px)").matches
}

if (getIsDesktop()) {
  if (siteMenu.classList.contains('site-menu--closed')) {
    siteMenu.classList.remove('site-menu--closed');
  }
}

window.addEventListener('resize', function() {
  if (getIsDesktop() && siteMenu.classList.contains('site-menu--closed')) {
      siteMenu.classList.remove('site-menu--closed');
  } else {
    siteMenu.classList.add('site-menu--closed');
  }
});

siteMenuToggle.addEventListener('click', function() {
  siteMenuToggle.classList.toggle('page-header__toggle--closed');
  siteMenu.classList.toggle('site-menu--closed');
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show");
});
popup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show");
});
