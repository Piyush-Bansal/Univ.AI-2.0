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

// Animate characters into view with a stagger effect
gsap.from(textBreakup.chars, {
  duration: 1.8,
  ease: "circ.inOut",
  x: "-200%",
  stagger: { amount: 0.7 },
});
