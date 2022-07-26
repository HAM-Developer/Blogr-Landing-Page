//NAVIGATION BAR TOGGLE

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav");
const cancelBtn = document.getElementById("cancel");

const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.style.display = "none";
  cancelBtn.style.display = "block";
  navMenu.style.display = "flex";
})
cancelBtn.addEventListener("click", () => {
  hamburger.style.display = "block";
  cancelBtn.style.display = "none";
  navMenu.style.display = "none";
})
//AOS ANIMATION
AOS.init({duration:1000,once:true,delay:300});