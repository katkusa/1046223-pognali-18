var siteMenu = document.querySelector('.site-menu');
var siteMenuToggle = document.querySelector('.page-header__toggle');
var link = document.querySelector(".distribution__link-container");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__button");
var dropdownLabel = document.querySelector('.travel-route__country-container--dropdown');
var dropdown = document.querySelector('.travel-route__country-item--dropdown');
var formCont = document.querySelector('.traveller-form__container-checkbox');
var formBtnArrow = document.querySelector('.traveller-form__button-arrow');
var countryFormEl = document.querySelector(".country-filter");
var toggleFormEl = document.querySelector(".country__btn--empty");
var countryCatalogEl = document.querySelector(".country-filter--catalog");
var toggleCatalog1El = document.querySelector(".country-filter__toggle");
var toggleCatalog2El = document.querySelector(".country-filter__close");

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


dropdownLabel.addEventListener('click', function() {
dropdown.classList.toggle('travel-route__country-item--dropdown--opened');
});

formBtnArrow.addEventListener('click', function() {
  formBtnArrow.classList.toggle('traveller-form__button-arrow--opened');
  formCont.classList.toggle('traveller-form__container-checkbox--opened');
});



if (toggleFormEl) {
  toggleFormEl.onclick = function() {
    countryFormEl.classList.toggle("country-filter--open");
  };
}

if (toggleCatalog1El) {
  toggleCatalog1El.onclick = function() {
    countryCatalogEl.classList.toggle("country-filter--open");
  };
}

if (toggleCatalog2El) {
  toggleCatalog2El.onclick = function() {
    countryCatalogEl.classList.toggle("country-filter--open");
  };
}
