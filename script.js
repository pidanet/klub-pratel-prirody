/* DARK/LIGHT MODE */

const body = document.querySelector("body");
const bwButton = document.querySelector(".fa-circle-half-stroke");
const navUl = document.querySelector("nav ul");
const ribbon = document.querySelectorAll(".ribbon");

bwButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  bwButton.classList.toggle("dark-mode");
  navUl.classList.toggle("dark-mode");
  ribbon.forEach((element) => {
    element.classList.toggle("dark-mode");
  });
});

/* HAMBURGER MENU */

const menuIcon = document.querySelector(".nav-icon");
const menuList = document.querySelector(".nav-wrapper ul");
const hamburgerIcon = document.querySelector(".ico");

const changeIcon = (icon1, icon2, view) => {
  hamburgerIcon.classList.toggle(icon1);
  hamburgerIcon.classList.toggle(icon2);
  menuList.style.display = view;
};

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[2] === "fa-bars") {
    changeIcon("fa-xmark", "fa-bars", "block");
  } else {
    changeIcon("fa-bars", "fa-xmark", "none");
  }
});

/* SCROLL-TO-TOP BUTTON */

const scrollBtn = document.getElementById("scrollbtn");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

/* PASSWORD VALIDATION */

const form = document.querySelector("form");
const pass1 = document.getElementById("password-1");
const pass2 = document.getElementById("password-2");
const submitBtn = document.getElementById("submit-btn");
const emptyPassword = document.querySelector(".notification-1");
const notValidPwd = document.querySelector(".notification-2");
const validPwd = document.querySelector(".notification-3");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  emptyPassword.style.display = pass1.value === "" ? "block" : "none";
  emptyPassword.style.display = pass2.value === "" ? "block" : "none";
  notValidPwd.style.display = pass1.value !== pass2.value ? "block" : "none";
  validPwd.style.display =
    (pass1.value === pass2.value) & (pass1.value !== "") ? "block" : "none";
});
