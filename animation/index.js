const progNav = document.querySelector("#program");
const courseNav = document.querySelector("#course");
const ghfNav = document.querySelector("#ghf");

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

//open menu when program button is pressed
progNav.addEventListener("click", () => {
  if (window.innerWidth <= 1023) {
    openMenuProg.restart();
  } else {
    openMenuProgD.restart();
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
    "-=1"
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
    "-=1"
  )
  .to(
    [".submenu__promo", ".sidemenu__wrapper > .button-wrapper"],
    {
      opacity: 1,
      duration: 0.4,
    },
    "-=0.1"
  );

//close button functionality
const closeSubmenu = document.querySelector("#close__side-menu");

closeSubmenu.addEventListener("click", () => {
  closeMenu.restart();
});

let closeMenu = gsap.timeline({
  ease: "Power2.easeIn",
  paused: true,
});

closeMenu
  .to(".nav__close", {
    rotate: -180,
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
