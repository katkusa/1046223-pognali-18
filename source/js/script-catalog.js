var siteMenu = document.querySelector('.site-menu');
var pageHeader = document.querySelector('.page-header');
var siteMenuToggle = document.querySelector('.page-header__toggle');
var travellerForm = document.querySelectorAll('.traveller-form__container');
var travellerBtn = document.querySelector('.traveller-form__button-arrow');
/*
var countryFormEl = document.querySelector('.country-filter');
var toggleFormEl = document.querySelector('.country__btn--empty');
var countryCatalogEl = document.querySelector('.country-filter--catalog');
var toggleCatalog1El = document.querySelector('.country-filter__toggle');
var toggleCatalog2El = document.querySelector('.country-filter__close');*/

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
travellerForm.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.currentTarget.classList.toggle('traveller-form__container--opened');
  })
})

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

/*
if (toggleFormEl) {
  toggleFormEl.onclick = function() {
    countryFormEl.classList.toggle('country-filter--open');
  };
}

if (toggleCatalog1El) {
  toggleCatalog1El.onclick = function() {
    countryCatalogEl.classList.toggle('country-filter--open');
  };
}

if (toggleCatalog2El) {
  toggleCatalog2El.onclick = function() {
    countryCatalogEl.classList.toggle('country-filter--open');
  };
}
*/
