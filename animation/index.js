let openMenu = gsap.timeline({
  paused: true,
});
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

gsap.set([".sidemenu", ".submenu__item"], {
  opacity: 0,
  x: "-100%",
});

gsap.set(".sidemenu .separator", {
  width: 0,
});

openMenu
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
