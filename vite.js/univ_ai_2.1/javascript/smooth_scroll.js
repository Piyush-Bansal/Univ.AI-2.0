window.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
    direction: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 1.3,
  });

  const overScroll = document.querySelectorAll(".over--scroll");
  overScroll.forEach((scroll) => {
    scroll.setAttribute("onwheel", "event.stopPropagation()");
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
