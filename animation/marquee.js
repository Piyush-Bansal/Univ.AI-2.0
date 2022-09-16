// marquee animation

// grab the wrapper element
const marqueeWrapper = document.querySelectorAll(".marquee-wrapper");

marqueeWrapper.forEach((wrapper) => {
  // grab children of the wrapper
  const marqueeRow = wrapper.querySelector(".marquee-row");
  const rowWidth = marqueeRow.clientWidth;

  // append  5 copies of the row into wrapper
  for (i = 0; i < 5; i++) {
    wrapper.appendChild(marqueeRow.cloneNode(true));
  }
});

// add gsap
gsap.to(".marquee-row", {
  x: "-100%",
  repeat: -1,
  duration: 15,
  ease: "linear",
});
