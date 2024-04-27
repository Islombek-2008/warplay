let menuBar = document.getElementById("menu")
let openMenuBtn = document.getElementById("menu-btn")
let body = document.getSelection("body")
let installPageMobile = document.getElementById("install-pageMobile")

openMenuBtn.addEventListener("click", function () {
    // body.style.display = "none"
  menuBar.style.display = "block"
  installPageMobile.style.display = "none"
  });