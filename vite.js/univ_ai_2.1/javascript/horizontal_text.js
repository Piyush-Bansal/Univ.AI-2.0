window.addEventListener("DOMContentLoaded", () => {
  // horizontal text stagger

  const textBreakupH = new SplitType(".text-reveal-h", { types: "lines" });

  // add the characters to a div
  let lineBreak = document.querySelectorAll(".line");
  lineBreak.forEach((line) => {
    let parent = line.parentNode;
    let wrapper = document.createElement("div");
    parent.replaceChild(wrapper, line);
    wrapper.appendChild(line);
    wrapper.classList.add("line-wrapper");
  });

  const lineBreakupElements = document.querySelectorAll(
    ".text-reveal-h:not(.hero)"
  );
  lineBreakupElements.forEach((element) => {
    gsap.from(element.querySelectorAll(".line"), {
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
      },
      duration: 0.4,
      ease: "circ.inOut",
      y: "-100%",
      stagger: { amount: 0.2 },
    });
  });
});
