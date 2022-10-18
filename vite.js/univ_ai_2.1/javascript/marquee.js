// marquee animation
window.addEventListener("load", () => {
  // grab the wrapper element
  const marqueeWrapper = document.querySelectorAll(".marquee-wrapper");

  marqueeWrapper.forEach((wrapper) => {
    // grab children of the wrapper
    const marqueeRow = wrapper.querySelector(".marquee-row");
    const rowWidth = marqueeRow.clientWidth;

    // get flex gap
    const wrapperStyle = window.getComputedStyle(wrapper);
    let gap = wrapperStyle.getPropertyValue("grid-column-gap");
    gap = parseFloat(gap, 10);

    const totalWidth = rowWidth + gap * 2;

    // append  5 copies of the row into wrapper
    for (i = 0; i < 3; i++) {
      wrapper.appendChild(marqueeRow.cloneNode(true));
    }

    // add gsap
    gsap.to(".marquee-row", {
      x: totalWidth * -1,
      repeat: -1,
      duration: 12,
      ease: "linear",
    });
  });
});
