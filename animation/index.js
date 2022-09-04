let openMenu = gsap.timeline();
openMenu
  .from([".nav__bg", ".nav__close--wrapper"], {
    opacity: 0,
  })
  .from([".sidemenu", ".submenu__item"], {
    opacity: 0,
    x: "-100%",
  })
  .from(".sidemenu .separator", {
    width: 0,
  })
  .to(".nav__bg", {
    opacity: 1,
  })
  .to(".sidemenu", {
    opacity: 1,
    x: 0,
  })
  .to(".nav__close--wrapper", {
    opacity: 1,
  });
