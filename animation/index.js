let openMenu = gsap.timeline();
gsap.set(
  [
    ".nav__bg",
    ".nav__close--wrapper",
    ".sidemenu__intro",
    ".sidemenu .button-wrapper",
    ".submenu__promo",
  ],
  {
    opacity: 0,
  }
);
openMenu
  .set([".sidemenu", ".submenu__item"], {
    opacity: 0,
    x: "-100%",
  })
  .set(".sidemenu .separator", {
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
