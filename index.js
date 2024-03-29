"use strict";
// Creating DOM  elements
const body = document.querySelector("body");
const popUpMenu = document.querySelector(".popup-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const menuList = document.querySelector(".menu-list");
const navBarBtn = document.querySelector(".navbar-btn");
const main = document.querySelector("main");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const aside = document.querySelector("aside");
const darkerContainer = document.querySelector(".darker");
const allQuestions = document.querySelectorAll(".question");
const questionsContainer = document.querySelector(".questions-container");
const partnerMainContainer = document.querySelector(".partners");
const leftDirection = document.querySelector(".fa-chevron-left");
const rightDirection = document.querySelector(".fa-chevron-right");
const dots = document.querySelectorAll(".dot");
const partnersContainer = document.querySelector(".partners-container");

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
  popUpMenu.classList.toggle("visible");
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

// attaching handler function to open and close BTNs
closeMenuBtn.addEventListener("click", () => {
  closeSideMenuFnc();
});

navBarBtn.addEventListener("click", () => {
  openSideBar();
});

// window Scroll function below

function setStickyHeader() {
  header.style.backgroundColor = "rgb(38, 36, 36)";
  header.style.transform = "translateY(0)";
}

function removeStickyHeader() {
  header.style.backgroundColor = "rgba(38, 36, 36, 0.96)";
  header.style.transform = "translateY(-100px)";
}
let perviousScrollTop = 0;
window.addEventListener("scroll", () => {
  let currentScrollTop = window.scrollY || document.documentElement.scrollTop;
  if (body.clientWidth > 1000) {
    setStickyHeader();
  } else {
    currentScrollTop > perviousScrollTop
      ? removeStickyHeader()
      : setStickyHeader();
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

// opening and closing answer function
function toggleAnswer(param) {
  let allAnswers = Array.from(document.querySelectorAll(".answer"));
  let [targetedElement] = allAnswers.filter((item) => item.id == param);

  allAnswers.forEach((el) => {
    if (el == targetedElement) {
      el.classList.contains("none")
        ? el.classList.remove("none")
        : el.classList.add("none");
    } else {
      el.classList.add("none");
    }
  });
}

//changing icon function
function toggleIcon(param) {
  let icons = Array.from(document.querySelectorAll(".icon-span"));
  let targetedIcon = icons[param];
  icons.forEach((el) => {
    if (el != targetedIcon) {
      el.innerHTML = '<i class="fa-solid fa-angle-down icon"></i>';
    }
  });
  targetedIcon.childNodes[0].classList.contains("fa-angle-down")
    ? (targetedIcon.innerHTML = "<i class='fa-solid fa-angle-up icon'></i>")
    : (targetedIcon.innerHTML = '<i class="fa-solid fa-angle-down icon"></i>');
}

// Slider Functionality
let partners = document.querySelectorAll(".partner");

let initialValue = 1;
let maxValue = 3;

let intervalId;

// automatically changing partner divs function
function changeDiv(count) {
  clearInterval(intervalId);
  partners.forEach((partner) => {
    partner.getAttribute("data-id") == count
      ? partner.classList.add("visible-div")
      : partner.classList.remove("visible-div");
  });

  intervalId = setInterval(() => {
    count++;
    if (count === maxValue) {
      count = 0;
    }
    partners.forEach((partner) => {
      partner.getAttribute("data-id") == count
        ? partner.classList.add("visible-div")
        : partner.classList.remove("visible-div");
    });
  }, 4000);
}

// changing partners divs on dot click event
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    let id = dot.getAttribute("data-custom-id");
    changeDiv(id);
  });
});

// finding active/visible partner div
function findCurrDiv() {
  partners = document.querySelectorAll(".partner");

  let [targetedItem] = Array.from(partners).filter((partner) => {
    return partner.classList.contains("visible-div");
  });
  let index = targetedItem.getAttribute("data-id");

  return Number(index);
}

// attaching handler function to right and left direction icons
leftDirection.addEventListener("click", () => {
  let divId = findCurrDiv();
  divId == 0 ? changeDiv(2) : changeDiv(divId - 1);
});

rightDirection.addEventListener("click", () => {
  let divId = findCurrDiv();
  divId == 2 ? changeDiv(0) : changeDiv(divId + 1);
});

// function for when partner functionality should be called
// Options for the Intersection Observer
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      changeDiv(0);
    } else clearInterval(intervalId);
  });
}

const intersectionObserver = new IntersectionObserver(
  handleIntersection,
  options
);

intersectionObserver.observe(partnerMainContainer);

// Working on Slider Touch events

let startCord = 0;
let currentCord = 0;

partnersContainer.addEventListener("touchstart", touchStart);
partnersContainer.addEventListener("touchmove", touchFinish);

function touchStart(event) {
  startCord = event.touches[0].clientX;
}

function touchFinish(event) {
  if (startCord === 0) return;

  currentCord = event.touches[0].clientX;
  let swipedX = currentCord - startCord;

  if (swipedX > 0) {
    let divId = findCurrDiv();
    if (divId == 0) {
      changeDiv(2);
    } else changeDiv(divId - 1);
  } else if (swipedX < 0) {
    let divId = findCurrDiv();
    if (divId == 2) {
      changeDiv(0);
    } else changeDiv(divId + 1);
  }

  startCord = 0;
}
