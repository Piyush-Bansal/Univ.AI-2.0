window.addEventListener("DOMContentLoaded", () => {
  const heroTimeline = gsap.timeline({
    duration: 0.4,
    ease: "circ.inOut",
  });

  heroTimeline
    .from(".hero .hero__label .char", {
      x: "-110%",
      stagger: { amount: 0.8 },
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
      ".hero p .line",
      {
        ease: "circ.inOut",
        y: "-100%",
        stagger: { amount: 0.2 },
      },
      "-=0.4"
    )
    .fromTo(
      [".hero .button-wrapper", ".hero p"],
      { opacity: 0 },
      { opacity: 1 },
      "-=0.4"
    );
});
