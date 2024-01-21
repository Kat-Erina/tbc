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

let sideBarisOpen = false;
// closing side Bar menu
function closeSideMenuFnc() {
  //   popUpMenu.classList.add("closeMenuStyle");
  // darkerContainer.style.height = "0";
  closeMenuBtn.classList.toggle("invisible");
  popUpMenu.classList.toggle("visible");
  // sideBarisOpen = false;
  body.style.overflow = "auto";
  setTimeout(() => {
    menuList.classList.add("invisible");
    darkerContainer.style.height = "0";
  }, 300);
}
// opening sidebar menu
function openSideBar() {
  //   popUpMenu.classList.remove("closeMenuStyle");

  popUpMenu.classList.remove("invisible");
  popUpMenu.classList.add("visible");
  body.style.overflow = "hidden";
  // sideBarisOpen = true;
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

//changing transparency  on header based on position

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 5) {
    header.style.backgroundColor = "rgba(38, 36, 36, 0.96)";
  } else {
    header.style.backgroundColor = "rgb(38, 36, 36)";
  }
});

window.addEventListener("click", (e) => {
  if (popUpMenu.classList.contains("visible") && e.target.parentNode == body) {
    closeSideMenuFnc();
  }
});

/*
// creating slider
let partnerArray = document.querySelectorAll(".partner");
const partners = document.querySelector(".partners");
const partnersContainer = document.querySelector(".partnersContainer");
let activeSlide = 0;
const totalSlidesAmount = document.querySelectorAll(".partner").length;

console.log(partnerArray);
partnerArray.forEach((el) => {
  console.log(el.offsetWidth);
});

// let cur = 0;
// function updateCarousel() {
//   if (cur < 3) {
//     setInterval(() => {
//       console.log(cur);
//       partnerArray[cur].style.transform = `translateX(-100px)`;

//       console.log(cur);
//       console.log(partnerArray[cur]);
//       cur++;
//     }, 500);
//   } else cur = 0;
// }

// function updateCarousel() {
//   partnerArray.forEach((partner, index) => {
//     partner.style.transform = `translateX(${
//       partner.offsetWidth * (index - 1)
//     }px )`;
//     // Adjust the interval duration as needed for each div
//   });
// }

function updateCarousel() {
  let val = 1;
  if (val < 3) {
    console.log(val);
    partnerArray.forEach((partner, index) => {
      partner.style.transform = `translateX(${
        partner.offsetWidth * (index - val)
      }px )`;
    });
    val++;
    console.log(val);
  }
}

updateCarousel();

// updateCarousel();
// setInterval(() => updateCarousel(), 500);

// updateSlide();
//chatgpt is daweerili
// function updateCarousel() {
//   // const partnersContainer = document.querySelector(".partnersContainer");
//   const slideWidth = document.querySelector(".partner").clientWidth;
//   partner.style.transform = `translateX(${-activeSlide * slideWidth}px)`;
// }
// updateCarousel();
// const slideWidth = document.querySelector(".partner").clientWidth;
// console.log(slideWidth);
// function nextSlide() {
//   activeSlide = (activeSlide + 1) % totalSlides;
//   updateCarousel();
// }

// function prevSlide() {
//   activeSlide = (activeSlide - 1 + totalSlides) % totalSlides;
//   updateCarousel();
// }
*/

// creating quations/answers div

{
  /* <i class="fa-solid fa-angle-up"></i> */
}

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
