const profileWrapper = document.querySelectorAll(".profiles__wrapper");
profileWrapper.forEach((section) => {
  const curtain = section.querySelectorAll(".profile-img__curtain");
  const profileTitle = section.querySelectorAll(".profile__title");
  const profileDescription = section.querySelectorAll(".profile_description");
  const separator = section.querySelectorAll(".separator");

  curtain.forEach((element) => {
    gsap.set(element, { display: "block" });
  });

  const profileTl = gsap.timeline({
    duration: 0.8,
    stagger: 0.2,
    ease: "Power4.easeInOut",
    scrollTrigger: {
      trigger: section,
      start: "start 85%",
    },
  });

  profileTl
    .to(curtain, { y: "101%", stagger: 0.2 })
    .from(
      profileTitle,
      {
        opacity: 0,
        y: "-20%",
      },
      "-=1"
    )
    .from(
      profileDescription,
      {
        opacity: 0,
        y: "-20%",
      },
      "-=1.2"
    )
    .from(
      separator,
      {
        height: 0,
      },
      "-=0.2"
    );
});
