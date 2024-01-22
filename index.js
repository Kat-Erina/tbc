// getting HTML elements
const body = document.querySelector("body");
const popUpMenu = document.querySelector(".popUpMenu");
const closeMenuBtn = document.querySelector(".closeMenu");
const menuList = document.querySelector(".menuList");
const navBarBtn = document.querySelector(".navBar");
const main = document.querySelector("main");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const aside = document.querySelector("aside");
const darkerContainer = document.querySelector(".darker");
const allQuestions = document.querySelectorAll(".question");
const questionsContainer = document.querySelector(".questionsContainer");

// closing side Bar menu
function closeSideMenuFnc() {
  closeMenuBtn.classList.toggle("invisible");
  popUpMenu.classList.toggle("visible");
  body.style.overflow = "auto";
  setTimeout(() => {
    menuList.classList.add("invisible");
    darkerContainer.style.height = "0";
  }, 300);
}
// opening sidebar menu
function openSideBar() {
  popUpMenu.classList.remove("invisible");
  popUpMenu.classList.add("visible");
  body.style.overflow = "hidden";
  closeMenuBtn.classList.remove("invisible");
  setTimeout(() => {
    menuList.classList.remove("invisible");
    darkerContainer.style.height = "100vh";
  }, 300);
  setTimeout(() => {
    darkerContainer.style.height = "100vh";
  }, 100);
}

closeMenuBtn.addEventListener("click", () => {
  closeSideMenuFnc();
});

navBarBtn.addEventListener("click", () => {
  openSideBar();
});

// window Scroll function below

let perviousScrollTop = 0;

window.addEventListener("scroll", () => {
  let currentScrollTop = window.scrollY || document.documentElement.scrollTop;
  if (currentScrollTop > perviousScrollTop) {
    header.style.backgroundColor = "rgba(38, 36, 36, 0.96)";
    header.style.transform = "translateY(-100px)";
  } else {
    header.style.backgroundColor = "rgb(38, 36, 36)";
    header.style.transform = "translateY(0)";
  }

  perviousScrollTop = currentScrollTop;
});

window.addEventListener("click", (e) => {
  if (popUpMenu.classList.contains("visible") && e.target.parentNode == body) {
    closeSideMenuFnc();
  }
});

//writing Q&! functionality

allQuestions.forEach((child, index) => {
  child.addEventListener("click", () => {
    toggleAnswer(index);
    toggleIcon(index);
  });
});

function toggleAnswer(param) {
  let allAnswers = Array.from(document.querySelectorAll(".answer"));
  let [targetedElement] = allAnswers.filter((item) => item.id == param);

  allAnswers.forEach((el) => {
    if (el == targetedElement) {
      if (el.classList.contains("none")) {
        el.classList.remove("none");
      } else el.classList.add("none");
    } else {
      el.classList.add("none");
    }
  });
}

function toggleIcon(param) {
  let icons = Array.from(document.querySelectorAll(".iconSpan"));
  let targetedIcon = icons[param];
  if (targetedIcon.childNodes[0].classList.contains("fa-angle-down")) {
    targetedIcon.innerHTML = "<i class='fa-solid fa-angle-up icon'></i>";
  } else targetedIcon.innerHTML = '<i class="fa-solid fa-angle-down icon"></i>';
  console.log(targetedIcon.childNodes);
}
