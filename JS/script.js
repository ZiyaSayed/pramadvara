let bar = document.querySelector(".hamburgerMenu");
let navbarMenu = document.querySelector(".navbarMenu");
let cross = document.querySelector(".cross");
let expandIcon = document.querySelector(".expandIcon");
let collectionSubmenu = document.querySelector(".collectionSubmenu");

bar.addEventListener("click", () => {
  navbarMenu.style["left"] = "0";
});

cross.addEventListener("click", () => {
  navbarMenu.style["left"] = "-100%";
});

expandIcon.addEventListener("click", () => {
  expandIcon.classList.toggle("rotateIcon");
  collectionSubmenu.classList.toggle("show");
});
