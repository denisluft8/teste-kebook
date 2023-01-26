const menu = document.querySelector(".mobile__menu");
const menuList = document.querySelector(".mobile__list");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.querySelector(".menu__close");
const searchIcon = document.querySelector(".img-search");
const searchInput = document.querySelector(".input-search");
const searchClose = document.querySelector(".close-search");
const mobileSearchIcon = document.querySelector(".mimg-search");
const mobileSearchInput = document.querySelector(".minput-search");
const mobileSearchClose = document.querySelector(".mclose-search");
const mobileLink = document.querySelectorAll(".mobile__link");

console.log(mobileLink);

function openMenu() {
  menu.setAttribute("style", "display: flex; animation-name: menu-show;");
  setTimeout(() => {
    menuList.setAttribute("style", "display: flex;");
  }, "300");
}

function closeMenu() {
  menu.setAttribute("style", "display:flex; animation-name: menu-hide;");
  setTimeout(() => {
    menu.setAttribute("style", "display:none;");
  }, "500");

  setTimeout(() => {
    menuList.setAttribute("style", "display: none;");
  }, "100");
}

function openSearch() {
  searchInput.setAttribute(
    "style",
    "display: block; animation-name: search-show; animation-duration: 0.5s;"
  );
  searchClose.setAttribute("style", "display: block;");
  searchIcon.setAttribute("style", "display: none;");
}

function closeSearch() {
  searchInput.setAttribute(
    "style",
    "display: block; animation-name: search-hide; animation-duration: 0.5s;"
  );
  setTimeout(() => {
    searchInput.setAttribute("style", "display:none;");
  }, "400");
  searchClose.setAttribute("style", "display: none;");
  searchIcon.setAttribute("style", "display: block;");
}

function openSearchMobile() {
  mobileSearchInput.setAttribute(
    "style",
    "display: block; animation-name: search-show; animation-duration: 0.5s;"
  );

  mobileSearchClose.setAttribute("style", "display: block;");
  mobileSearchIcon.setAttribute("style", "display: none;");
}

function closeSearchMobile() {
  mobileSearchInput.setAttribute(
    "style",
    "display: block; animation-name: search-hide; animation-duration: 0.5s;"
  );
  setTimeout(() => {
    mobileSearchInput.setAttribute("style", "display:none;");
  }, "500");
  mobileSearchClose.setAttribute("style", "display: none;");
  mobileSearchIcon.setAttribute("style", "display: block;");
}

hamburgerIcon.addEventListener("click", openMenu);

closeIcon.addEventListener("click", closeMenu);

searchIcon.addEventListener("click", openSearch);

searchClose.addEventListener("click", closeSearch);

mobileSearchIcon.addEventListener("click", openSearchMobile);

mobileSearchClose.addEventListener("click", closeSearchMobile);

for (let i = 0; i < mobileLink.length; i++) {
  mobileLink[i].addEventListener("click", closeMenu);
}
