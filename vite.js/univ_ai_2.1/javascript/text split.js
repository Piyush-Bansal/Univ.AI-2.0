// Split text into words and characters
const textBreakup = new SplitType(".text-reveal", { types: "words, chars" });

// add the characters to a div
let charaBreak = document.querySelectorAll(".char");
charaBreak.forEach((char) => {
  let parent = char.parentNode;
  let wrapper = document.createElement("div");
  parent.replaceChild(wrapper, char);
  wrapper.appendChild(char);
  wrapper.classList.add("char-wrapper");
});

const breakupElements = document.querySelectorAll(".text-reveal:not(.hero)");
breakupElements.forEach((element) => {
  gsap.from(element.querySelectorAll(".char"), {
    scrollTrigger: {
      trigger: element,
      start: "top 95%",
    },
    duration: 0.4,
    ease: "circ.inOut",
    x: "-110%",
    stagger: { amount: 0.8 },
  });
});
