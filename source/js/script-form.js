var siteMenu = document.querySelector('.site-menu');
var siteMenuToggle = document.querySelector('.page-header__toggle');
var link = document.querySelector('.distribution__link-container');
var dropdownLabel = document.querySelector('.travel-route__country-container--dropdown');
var dropdown = document.querySelector('.dropdown-form');


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

dropdownLabel.addEventListener('click', function() {
  dropdown.classList.toggle('dropdown-form--opened');
});
