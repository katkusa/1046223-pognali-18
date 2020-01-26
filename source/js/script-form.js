var siteMenu = document.querySelector('.site-menu');
var pageHeader = document.querySelector('.page-header');
var siteMenuToggle = document.querySelector('.page-header__toggle');
var dropdownLabel = document.querySelector('.travel-route__country-container--dropdown');
var dropdown = document.querySelector('.dropdown-form');


var getIsDesktop = function () {
  return window.matchMedia("(min-width: 1440px)").matches
}


//Подготавливаем страницу для работы с js
if (pageHeader.classList.contains('no-js')) {
  pageHeader.classList.remove('no-js');
}

siteMenu.classList.add('site-menu--closed')

//Код для работы интерфейса
siteMenuToggle.addEventListener('click', function() {
  siteMenuToggle.classList.toggle('page-header__toggle--closed');
  siteMenu.classList.toggle('site-menu--closed');
});
dropdownLabel.addEventListener('click', function() {
  dropdown.classList.toggle('dropdown-form--opened');
});

//Обработчик скролла для меню
window.addEventListener('scroll', function (evt) {
  if (siteMenu.classList.contains('site-menu--open')) {
    return
  } else {
    if (window.pageYOffset > 300) {
      pageHeader.classList.add('page-header--scroll');
    } else {
      pageHeader.classList.remove('page-header--scroll');
    }
  }
});

//Обработчик ресайза для меню
window.addEventListener('resize', function() {
  if (getIsDesktop()) {
      siteMenu.classList.remove('site-menu--closed');
  } else {
    siteMenu.classList.add('site-menu--closed');
  }
});

if (getIsDesktop()) {
  siteMenu.classList.remove('site-menu--closed');
}
