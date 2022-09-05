const progNav = document.querySelector("#program");
const courseNav = document.querySelector("#course");
const ghfNav = document.querySelector("#ghf");
const backNav = document.querySelector("#nav-back");

gsap.set(
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
);

gsap.set([".nav__bg", ".sidemenu__intro", ".sidemenu .s-m-b-64"], {
  display: "none",
});

gsap.set(".sidemenu", {
  opacity: 0,
  x: "-100%",
});

gsap.set(".submenu__item", {
  x: "-2%",
  opacity: 0,
});

gsap.set(".sidemenu .separator", {
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
    "-=0.1"
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
      delay: 0.5,
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
  scrollUnFreeze();
  closeMenu.restart();
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
    "-=1.5"
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
    "-=1.5"
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
    "-=1.5"
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
    "-=1.5"
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
    "-=1.5"
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
    "-=1.5"
  )
  .to(
    [".submenu__promo", ".sidemenu__wrapper > .button-wrapper"],
    {
      opacity: 1,
      duration: 0.4,
    },
    "-=0.1"
  );
