//stagger reveal table rows
const tableRow = document.querySelectorAll(".table-row");
tableRow.forEach((row) => {
  gsap.from(row, {
    y: "20%",
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: Power4.easeOut,
    scrollTrigger: {
      trigger: row,
      start: "start 75%",
    },
  });
});

//curtain animation
gsap.set(".img__curtain", { display: "block" });
const curtainElements = document.querySelectorAll(".img__curtain");
curtainElements.forEach((element) => {
  gsap.to(element, {
    y: "101%",
    stagger: 0.4,
    duration: 0.6,
    ease: Power4.easeInOut,
    scrollTrigger: {
      trigger: element,
      start: "start 70%",
    },
  });
});

//image parallax
const imgWrapper = document.querySelectorAll(".img-wrapper");
imgWrapper.forEach((wrapper) => {
  const imgWrapperImg = wrapper.querySelectorAll(".parallax");
  imgWrapperImg.forEach((img) => {
    gsap.set(img, {
      height: "110%",
      width: "110%",
      y: "-10%",
    });

    gsap.to(img, {
      y: "0%",
      ease: Power1.easeInOut,
      scrollTrigger: {
        trigger: img,
        start: "start 85%",
        end: "start 15%",
        scrub: true,
      },
    });
  });
});

// value prop reveal

let a = document.querySelectorAll(".value-prop");
a.forEach((b) => {
  console.log(b);
});
gsap.from(".value-prop", {
  y: "20%",
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
  ease: Power4.easeOut,
  scrollTrigger: {
    trigger: row,
    start: "start 75%",
    markers: true,
  },
});
