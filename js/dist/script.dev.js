"use strict";

// =================  лайк  ===================
var Likes = document.querySelectorAll('.like');
Likes.forEach(likeToggle);

function likeToggle(item) {
  item.addEventListener("click", function () {
    this.classList.toggle('active');
  });
}

; // =================  активные ссылки  ===================

var headerNavLinks = document.querySelectorAll('.header-nav__link');
headerNavLinks.forEach(makeLinkActive);

function makeLinkActive(link) {
  link.addEventListener("click", function () {
    headerNavLinks.forEach(function (item) {
      item.classList.remove('active');
    });
    this.classList.add('active');
  });
} // сделать первую ссылку активной по умолчанию


document.querySelector('.header-nav__link:nth-child(1)').click(); // =================  поиск  ===================

var searchIcon = document.querySelector('.search__icon');
var searchInput = document.querySelector('.search__input');
searchIcon.addEventListener("click", function () {
  searchInput.classList.toggle('active');
  searchInput.focus();
}); // ============  бургер-меню  ============ 

var headerBurger = document.querySelector('.header__burger');
var headerNav = document.querySelector('.header-nav');
headerBurger.addEventListener('click', function (e) {
  document.body.classList.toggle('lock');
  headerNav.classList.toggle('active');
  headerBurger.classList.toggle('active');
  console.log(111);
});
headerNavLinks.forEach(function (headerNavLink) {
  headerNavLink.addEventListener('click', onHeaderNavLinkClick);
});

function onHeaderNavLinkClick(e) {
  var headerNavLink = e.target;

  if (headerBurger.classList.contains('active')) {
    document.body.classList.remove('lock');
    headerNav.classList.remove('active');
    headerBurger.classList.remove('active');
  }
}