window.addEventListener("DOMContentLoaded", () => {
  const heroTimeline = gsap.timeline({
    duration: 0.4,
    ease: "circ.inOut",
  });

  heroTimeline
    .from(".hero .hero__label .char", {
      x: "-110%",
      stagger: { amount: 0.4 },
    })
    .from(
      ".hero .hero__headline .char",
      {
        x: "-110%",
        stagger: { amount: 0.8 },
      },
      "-=0.4"
    )
    .from(
      [".hero h5 .char", ".hero h4 .char"],
      {
        x: "-110%",
        stagger: { amount: 0.8 },
      },
      "-=0.4"
    )
    .from(
      [".hero p ", ".hero .button-wrapper"],
      {
        ease: "circ.inOut",
        opacity: 0,
      },
      "-=0.4"
    )
    .fromTo(
      ".hero__content-wrapper .separator",
      { height: "0%" },
      { height: "100%" }
    );
});
