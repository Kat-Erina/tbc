// getting HTML elements
const body = document.querySelector("body");
// const closeSideMenuBtn = document.querySelector(".sideHeader");
const popUpMenu = document.querySelector(".popUpMenu");
const closeMenuBtn = document.querySelector(".closeMenu");
const menuList = document.querySelector(".menuList");
const navBarBtn = document.querySelector(".navBar");
const main = document.querySelector("main");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const aside = document.querySelector("aside");

let sideBarisOpen = false;
// closing side Bar menu
function closeSideMenuFnc() {
  //   popUpMenu.classList.add("closeMenuStyle");
  closeMenuBtn.classList.toggle("invisible");
  popUpMenu.classList.toggle("visible");
  sideBarisOpen = false;
  body.style.overflow = "auto";
  setTimeout(() => {
    menuList.classList.add("invisible");
  }, 300);
}
// opening sidebar menu
function openSideBar() {
  //   popUpMenu.classList.remove("closeMenuStyle");
  popUpMenu.classList.remove("invisible");
  popUpMenu.classList.add("visible");
  body.style.overflow = "hidden";
  sideBarisOpen = true;
  closeMenuBtn.classList.remove("invisible");
  setTimeout(() => {
    menuList.classList.remove("invisible");
  }, 300);
}

closeMenuBtn.addEventListener("click", () => {
  closeSideMenuFnc();
});

navBarBtn.addEventListener("click", () => {
  console.log("open");
  openSideBar();
});

//changing sticky feature on header based on position
