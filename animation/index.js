let openMenu = gsap.timeline();
openMenu
  .from(".nav__bg", {
    opacity: 0,
  })
  .from(".sidemenu", {
    opacity: 0,
    x: "-100%",
  })
  .to(".nav__close--wrapper", {
    opacity: 0,
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
