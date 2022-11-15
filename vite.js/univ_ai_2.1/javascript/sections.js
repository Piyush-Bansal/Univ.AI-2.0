//stagger reveal table rows
const tableRow = document.querySelectorAll(
  ".table-row, .accordion, .table-label, .stagger-reveal"
);
tableRow.forEach((row) => {
  gsap.from(row, {
    y: "10%",
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "Power4.easeOut",
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
    duration: 0.8,
    ease: "Power4.easeInOut",
    scrollTrigger: {
      trigger: element,
      start: "start 75%",
    },
  });
});

//image parallax
const imgWrapper = document.querySelectorAll(".img-wrapper");
imgWrapper.forEach((wrapper) => {
  const imgWrapperImg = wrapper.querySelectorAll(".parallax");
  imgWrapperImg.forEach((img) => {
    gsap.set(img, {
      height: "112%",
      width: "112%",
      y: "-12%",
    });

    gsap.to(img, {
      y: "0%",
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: img,
        start: "start 68%",
        end: "start 12%",
        scrub: true,
      },
    });
  });
});

// value prop animations
const valueProps = document.querySelectorAll(".value-prop");
const valuePropTl = gsap.timeline({
  scrollTrigger: {
    trigger: valueProps,
    start: "start 75%",
  },
});

valueProps.forEach((value) => {
  const valuePropImg = value.querySelectorAll(".value-prop__illustration");
  const valuePropSeparator = value.querySelectorAll(".value-prop .separator");
  const valuePropNumber = value.querySelectorAll(".value-prop .monospace");
  const valuePropHeadline = value.querySelectorAll(".value-prop h5");
  const valuePropDescription = value.querySelectorAll(".value-prop p");

  function scene() {
    const valueTl = gsap.timeline({
      duration: 0.3,
      ease: "Power4.easeInOut",
    });

    valueTl
      .from(valuePropImg, { y: "10%", opacity: 0 })
      .from(valuePropSeparator, { width: "0%" }, "-=0.3")
      .from(
        [valuePropNumber, valuePropHeadline, valuePropDescription],
        {
          y: "10%",
          opacity: 0,
          stagger: 0.2,
        },
        "-=0.3"
      );
    return valueTl;
  }

  valuePropTl.add(scene(), "-=0.8");
});

//form child stagger
const formTag = document.querySelector(".form");
const formElement = formTag.childNodes;

for (let item of formElement) {
  gsap.from(item, {
    y: "10%",
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "Power4.easeOut",
    scrollTrigger: {
      trigger: item,
      start: "start 85%",
    },
  });
}

//profile reveals

// const profileSection = document.querySelectorAll(".profiles__wrapper");

// profileSection.forEach((pSection) => {
//   const profilesMasterTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".profiles__wrapper",
//       start: "start 85%",
//       markers: true,
//     },
//   });

//   const profileWrapper = pSection.querySelectorAll(".profile__wrapper");
//   profileWrapper.forEach((section) => {
//     function scene() {
//       const curtain = section.querySelectorAll(".profile-img__curtain");
//       const profileTitle = section.querySelectorAll(".profile__title");
//       const profileDescription = section.querySelectorAll(
//         ".profile_description"
//       );
//       const separator = section.querySelectorAll(".separator");

//       curtain.forEach((element) => {
//         gsap.set(element, { display: "block" });
//       });

//       const profileTl = gsap.timeline({
//         duration: 0.8,
//         ease: Power4.easeInOut,
//       });

//       profileTl
//         .to(curtain, { y: "101%" })
//         .from(
//           profileTitle,
//           {
//             opacity: 0,
//             y: "-20%",
//           },
//           "-=0.2"
//         )
//         .from(
//           profileDescription,
//           {
//             opacity: 0,
//             y: "-20%",
//           },
//           "-=0.2"
//         )
//         .from(
//           separator,
//           {
//             height: 0,
//           },
//           "-=0.1"
//         );
//       return profileTl;
//     }
//     profilesMasterTl.add(scene(), "-=1.4");
//   });
// });
