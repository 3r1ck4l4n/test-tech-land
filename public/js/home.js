"use strict";

window.addEventListener("load", () => {

  //-------------MenuDesplegable------------
  let barMenu = document.getElementsByClassName("barMenu");
  let nav = document.getElementsByClassName("header-nav");
  window.innerWidth <= 560?(nav[0].style.display = "none"): (nav[0].style.display = "block");

  barMenu[0].addEventListener("mousedown", () => {
    let control = 0;
    nav[0].style.display != "none"
      ? (nav[0].style.display = "none")
      : (nav[0].style.display = "block");
  });

  window.addEventListener("resize", () => {
    window.innerWidth >= 560
      ? (nav[0].style.display = "block")
      : (nav[0].style.display = "none");
  });

  //---------------------Carrusel------------------------------
  
});
