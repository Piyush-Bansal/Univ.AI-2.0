const progNav = document.querySelector(".topbar .programs");
const courseNav = document.querySelector(".topbar .courses");
const ghfNav = document.querySelector(".topbar .ghf");
const backNav = document.querySelector("#nav-back");
let hamburgerOpen = false;
gsap.set(
  [
    ".nav__bg",
    ".nav__close--wrapper",
    ".sidemenu__intro",
    ".sidemenu-2 > .button-wrapper",
    ".submenu__promo",
    ".sidemenu__wrapper > .button-wrapper",
  ],
  {
    opacity: 0,
  }
);

gsap.set(
  [
    ".nav__bg",
    ".sidemenu__intro",
    ".sidemenu .s-m-b-64",
    ".sidemenu-2 .s-m-b-64",
  ],
  {
    display: "none",
  }
);

gsap.set([".sidemenu", ".sidemenu-2"], {
  opacity: 0,
  x: "-100%",
});

gsap.set(".submenu__item", {
  x: "-2%",
  opacity: 0,
});

gsap.set([".sidemenu .separator", ".sidemenu-2 .separator"], {
  width: 0,
});

//close button functionality
const closeSubmenu = document.querySelector("#close__side-menu");

closeSubmenu.addEventListener("click", () => {
  scrollUnFreeze();
  closeMenu.restart();
});

let closeMenu = gsap.timeline({
  ease: "Power2.easeIn",
  paused: true,
  duration: 0,
});

closeMenu
  .to(".nav__close", {
    rotate: -180,
    duration: 0.4,
  })
  .to(
    ".sidemenu",
    {
      opacity: 0,
      x: "-100%",
      duration: 0.4,
    },
    "-=0.5"
  )
  .set(".nav__close", { rotate: 0 })
  .set(
    [
      ".nav__bg",
      ".nav__close--wrapper",
      ".sidemenu__intro",
      ".submenu__promo",
      ".sidemenu__wrapper > .button-wrapper",
    ],
    {
      opacity: 0,
    }
  )
  .set([".nav__bg", ".sidemenu__intro", ".sidemenu .s-m-b-64"], {
    display: "none",
  })
  .set(".sidemenu", {
    opacity: 0,
    x: "-100%",
  })
  .set(".submenu__item", {
    x: "-2%",
    opacity: 0,
  })
  .set(".sidemenu .separator", {
    width: 0,
  });

//when back button is pressed play close animation
backNav.addEventListener("click", () => {
  // backBtnMenu.restart();
  closeMenu.restart();
  setTimeout(openMainMenu.restart(), 0.4);
});

let backBtnMenu = gsap.timeline({
  ease: "Power2.easeIn",
  paused: true,
});

backBtnMenu.to(".sidemenu", {
  opacity: 0,
  x: "-100%",
  duration: 0.4,
});

//open menu when program button is pressed
progNav.addEventListener("click", () => {
  scrollFreeze();
  if (window.innerWidth <= 1023) {
    openMenuProg.restart();
  } else {
    const sideMenu = document.querySelector(".sidemenu");
    if (sideMenu.getBoundingClientRect().y != 0) {
      closeMenu.restart();
      setTimeout(() => {
        openMenuProgD.restart();
      }, 800);
    } else {
      openMenuProgD.restart();
    }
  }
});

let openMenuProgD = gsap.timeline({
  paused: true,
  ease: "Power2.easeOut",
});

openMenuProgD
  .to(".nav__bg", {
    opacity: 1,
    display: "block",
  })
  .to(".sidemenu", {
    opacity: 1,
    x: 0,
    duration: 0.4,
  })
  .to(
    [".nav__close--wrapper", ".sidemenu .programs"],
    {
      opacity: 1,
      display: "block",
    },
    "-=0.5"
  )
  .to(".programs > .submenu__item", {
    x: 0,
    opacity: 1,
    duration: 0.2,
    stagger: 0.2,
  })
  .to(
    ".sidemenu .programs >.separator",
    {
      width: "100%",
      stagger: 0.2,
      duration: 0.2,
    },
    "-=0.5"
  )
  .to(
    [".submenu__promo", ".sidemenu__wrapper > .button-wrapper"],
    {
      opacity: 1,
      duration: 0.4,
    },
    "-=0.1"
  );

let openMenuProg = gsap.timeline({
  paused: true,
  ease: "Power2.easeOut",
});

openMenuProg
  .to([".nav__bg", ".sidemenu"], {
    opacity: 1,
    display: "block",
  })
  .to(".sidemenu", {
    opacity: 1,
    x: 0,
    duration: 0.4,
  })
  .to(
    [".sidemenu .programs"],
    {
      opacity: 1,
      display: "block",
    },
    "-=0.5"
  )
  .to(".programs > .submenu__item", {
    x: 0,
    opacity: 1,
    duration: 0.2,
    stagger: 0.2,
  })
  .to(
    ".sidemenu .programs >.separator",
    {
      width: "100%",
      stagger: 0.2,
      duration: 0.2,
    },
    "-=0.5"
  )
  .to(
    [".submenu__promo", ".sidemenu__wrapper > .button-wrapper"],
    {
      opacity: 1,
      duration: 0.4,
    },
    "-=0.1"
  );

//open menu when course button is pressed
courseNav.addEventListener("click", () => {
  scrollFreeze();
  if (window.innerWidth <= 1023) {
    openMenuCourse.restart();
  } else {
    const sideMenu = document.querySelector(".sidemenu");
    if (sideMenu.getBoundingClientRect().y != 0) {
      closeMenu.restart();
      setTimeout(() => {
        openMenuCourseD.restart();
      }, 800);
    } else {
      openMenuCourseD.restart();
    }
  }
});

let openMenuCourseD = gsap.timeline({
  paused: true,
  ease: "Power2.easeOut",
});

openMenuCourseD
  .to(".nav__bg", {
    opacity: 1,
    display: "block",
  })
  .to(".sidemenu", {
    opacity: 1,
    x: 0,
    duration: 0.4,
  })
  .to(
    [".nav__close--wrapper", ".sidemenu .courses"],
    {
      opacity: 1,
      display: "block",
    },
    "-=0.5"
  )
  .to(".courses > .submenu__item", {
    x: 0,
    opacity: 1,
    duration: 0.2,
    stagger: 0.2,
  })
  .to(
    ".sidemenu .courses >.separator",
    {
      width: "100%",
      stagger: 0.2,
      duration: 0.2,
    },
    "-=2.5"
  )
  .to(
    [".submenu__promo", ".sidemenu__wrapper > .button-wrapper"],
    {
      opacity: 1,
      duration: 0.4,
    },
    "-=0.1"
  );

let openMenuCourse = gsap.timeline({
  paused: true,
  ease: "Power2.easeOut",
});

openMenuCourse
  .to([".nav__bg", ".sidemenu"], {
    opacity: 1,
    display: "block",
  })
  .to(".sidemenu", {
    opacity: 1,
    x: 0,
    duration: 0.4,
  })
  .to(
    [".sidemenu .courses"],
    {
      opacity: 1,
      display: "block",
    },
    "-=0.5"
  )
  .to(".courses > .submenu__item", {
    x: 0,
    opacity: 1,
    duration: 0.2,
    stagger: 0.2,
  })
  .to(
    ".sidemenu .courses >.separator",
    {
      width: "100%",
      stagger: 0.2,
      duration: 0.2,
    },
    "-=2.5"
  )
  .to(
    [".submenu__promo", ".sidemenu__wrapper > .button-wrapper"],
    {
      opacity: 1,
      duration: 0.4,
    },
    "-=0.1"
  );

function scrollFreeze() {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
}

function scrollUnFreeze() {
  const body = document.querySelector("body");
  body.style.overflow = "visible";
}

//open menu when ghf button is pressed
ghfNav.addEventListener("click", () => {
  scrollFreeze();
  if (window.innerWidth <= 1023) {
    openMenuGhf.restart();
  } else {
    const sideMenu = document.querySelector(".sidemenu");
    if (sideMenu.getBoundingClientRect().y != 0) {
      closeMenu.restart();
      setTimeout(() => {
        openMenuGhfD.restart();
      }, 800);
    } else {
      openMenuGhfD.restart();
    }
  }
});

let openMenuGhfD = gsap.timeline({
  paused: true,
  ease: "Power2.easeOut",
});

openMenuGhfD
  .to(".nav__bg", {
    opacity: 1,
    display: "block",
  })
  .to(".sidemenu", {
    opacity: 1,
    x: 0,
    duration: 0.4,
  })
  .to(
    [".nav__close--wrapper", ".sidemenu .ghf"],
    {
      opacity: 1,
      display: "block",
    },
    "-=0.5"
  )
  .to(".ghf > .submenu__item", {
    x: 0,
    opacity: 1,
    duration: 0.2,
    stagger: 0.2,
  })
  .to(
    ".sidemenu .ghf >.separator",
    {
      width: "100%",
      stagger: 0.2,
      duration: 0.2,
    },
    "-=0.5"
  )
  .to(
    [".submenu__promo", ".sidemenu__wrapper > .button-wrapper"],
    {
      opacity: 1,
      duration: 0.4,
    },
    "-=0.1"
  );

let openMenuGhf = gsap.timeline({
  paused: true,
  ease: "Power2.easeOut",
});

openMenuGhf
  .to([".nav__bg", ".sidemenu"], {
    opacity: 1,
    display: "block",
  })
  .to(".sidemenu", {
    opacity: 1,
    x: 0,
    duration: 0.4,
  })
  .to(
    [".sidemenu .ghf"],
    {
      opacity: 1,
      display: "block",
    },
    "-=0.5"
  )
  .to(".ghf > .submenu__item", {
    x: 0,
    opacity: 1,
    duration: 0.2,
    stagger: 0.2,
  })
  .to(
    ".sidemenu .ghf >.separator",
    {
      width: "100%",
      stagger: 0.2,
      duration: 0.2,
    },
    "-=0.5"
  )
  .to(
    [".submenu__promo", ".sidemenu__wrapper > .button-wrapper"],
    {
      opacity: 1,
      duration: 0.4,
    },
    "-=0.1"
  );

// on press of the hamburger open the menu
const hamburgerMenu = document.querySelectorAll(".hamburger");
hamburgerMenu.forEach((hamburger) => {
  hamburger.addEventListener("click", () => {
    hamburgerOpen = !hamburgerOpen;
    if (hamburgerOpen) {
      scrollFreeze();
      openMainMenu.restart();
      document.querySelector(".topbar .button-wrapper").style.opacity = "0";
      setTimeout(() => {
        document.querySelector(".topbar .button-wrapper").style.display =
          "none";
      }, 400);
    } else {
      scrollUnFreeze();
      closeMainMenu.restart();
      document.querySelector(".topbar .button-wrapper").style.opacity = "1";
      setTimeout(() => {
        document.querySelector(".topbar .button-wrapper").style.display =
          "inline-block";
      }, 400);
    }
  });
});

let openMainMenu = gsap.timeline({ paused: true, ease: "Power2.easeOut" });

openMainMenu
  .set([".sidemenu", ".sidemenu-2"], { display: "none" })
  .to(".nav__bg", {
    opacity: 1,
    display: "block",
  })
  .to([".sidemenu-2", ".main-nav"], {
    opacity: 1,
    display: "block",
    x: 0,
    duration: 0.4,
  })
  .to(".sidemenu-2 .submenu__item", {
    x: 0,
    opacity: 1,
    duration: 0.15,
    stagger: 0.2,
  })
  .to(
    ".sidemenu-2 .main-nav >.separator",
    {
      width: "100%",
      stagger: 0.2,
      duration: 0.2,
    },
    "-=2.5"
  )
  .to(
    [".sidemenu__wrapper > .button-wrapper"],
    {
      opacity: 1,
      duration: 0.4,
    },
    "-=0.1"
  );

let closeMainMenu = gsap.timeline({
  ease: "Power2.easeIn",
  paused: true,
  duration: 0,
});

closeMainMenu
  .to(
    [".sidemenu-2", ".sidemenu"],
    {
      opacity: 0,
      x: "-100%",
      duration: 0.4,
    },
    "-=0.5"
  )
  .set(
    [
      ".nav__bg",
      ".nav__close--wrapper",
      ".sidemenu__intro",
      ".submenu__promo",
      ".sidemenu__wrapper > .button-wrapper",
    ],
    {
      opacity: 0,
    }
  )
  .set([".nav__bg", ".sidemenu__intro", ".sidemenu .s-m-b-64"], {
    display: "none",
  })
  .set(".sidemenu-2", {
    opacity: 0,
    x: "-100%",
  })
  .set(".submenu__item", {
    x: "-2%",
    opacity: 0,
  })
  .set(".sidemenu-2 .separator", {
    width: 0,
  });

const mainMenuPrograms = document.querySelector(".sidemenu-2  .programs");
mainMenuPrograms.addEventListener("click", () => {
  openMenuProg.restart();
});

const mainMenuCourses = document.querySelector(".sidemenu-2  .courses");
mainMenuCourses.addEventListener("click", () => {
  openMenuCourse.restart();
});
const mainMenuGhf = document.querySelector(".sidemenu-2  .ghf");
mainMenuGhf.addEventListener("click", () => {
  openMenuGhf.restart();
});
