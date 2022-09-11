gsap.registerPlugin(ScrollTrigger);

let topBarHeight = document.querySelector(".topbar").clientHeight;

const allSections = document.querySelectorAll(".wf-section");
allSections.forEach((section) => {
  gsap.set(section, {
    scrollTrigger: {
      trigger: section,
      start: `top top+=${topBarHeight}px`,
      end: `bottom top+=${topBarHeight}px`,
      onEnter: () => check(section),
      onEnterBack: () => check(section),
      onLeave: () => check(section),
      onLeaveBack: () => check(section),
    },
  });
});

// "top bottom-=100px"

function check(section) {
  if (
    section.classList.contains("bg-cobat-blue-4") ||
    section.classList.contains("bg-dark-grey-6")
  ) {
    navDark();
  } else {
    navLight();
  }
}

function navDark() {
  const navBg = document.querySelectorAll(".topbar, .sidemenu,.sidemenu-2");
  navBg.forEach((bg) => {
    bg.style.backgroundColor = "#1B1B1B";
  });

  const hoverBG = document.querySelectorAll(".navbar .hover-bg");
  hoverBG.forEach((bg) => {
    bg.style.backgroundColor = "#323232";
  });

  const paragraphs = document.querySelectorAll(".navbar p , .navbar .p");
  paragraphs.forEach((paragraph) => {
    paragraph.style.color = "white";
  });

  const navSeparators = document.querySelectorAll(".navbar .separator");
  navSeparators.forEach((separator) => {
    separator.style.backgroundColor = "#7A7A7A";
  });

  const sideMenuSeparator = document.querySelector(".sidemenu");
  sideMenuSeparator.style.borderRightColor = "#7A7A7A";

  if (window.innerWidth <= 1023) {
    const navHamburger = document.querySelectorAll(".hamburger");
    navHamburger.forEach((icon) => {
      if (icon.classList.contains("light")) {
        icon.style.display = "none";
      } else {
        icon.style.display = "block";
      }
    });
  }

  const navSvg = document.querySelectorAll(
    ".logo__code, .nav__close-img, .sidemenu-2 .is--arrow, .navbar .monospace, .sidemenu .is--arrow"
  );
  navSvg.forEach((icon) => {
    icon.style.color = "white";
  });

  const navButton = document.querySelector(".topbar .pill-button");
  navButton.classList.add("is--dark");

  const sideMenuBtn = document.querySelectorAll(
    ".sidemenu-2 .button-primary, .sidemenu .button-primary"
  );
  sideMenuBtn.forEach((btn) => {
    btn.classList.remove("button-primary");
    btn.classList.add("button-secondary");
    btn.querySelector(".monospace").style.color = "#1b1b1b";
  });
}

function navLight() {
  const navBg = document.querySelectorAll(".topbar, .sidemenu,.sidemenu-2");
  navBg.forEach((bg) => {
    bg.style.backgroundColor = "white";

    const hoverBG = document.querySelectorAll(".navbar .hover-bg");
    hoverBG.forEach((bg) => {
      bg.style.backgroundColor = "#f2f2f2";
    });

    const paragraphs = document.querySelectorAll(".navbar p , .navbar .p");
    paragraphs.forEach((paragraph) => {
      paragraph.style.color = "#1B1B1B";
    });

    const navSeparators = document.querySelectorAll(".navbar .separator");
    navSeparators.forEach((separator) => {
      separator.style.backgroundColor = "#D5D5D5";
    });

    const sideMenuSeparator = document.querySelector(".sidemenu");
    sideMenuSeparator.style.borderRightColor = "#D5D5D5";
  });

  if (window.innerWidth <= 1023) {
    const navHamburger = document.querySelectorAll(".hamburger");
    navHamburger.forEach((icon) => {
      if (icon.classList.contains("dark")) {
        icon.style.display = "none";
      } else {
        icon.style.display = "block";
      }
    });
  }

  const navSvg = document.querySelectorAll(
    ".logo__code, .nav__close-img, .sidemenu-2 .is--arrow, .navbar .monospace, .sidemenu .is--arrow"
  );
  navSvg.forEach((icon) => {
    icon.style.color = "#1B1B1B";
  });

  const navButton = document.querySelector(".topbar .pill-button");
  navButton.classList.remove("is--dark");

  const sideMenuBtn = document.querySelectorAll(
    ".sidemenu-2 .button-primary, .sidemenu .button-primary"
  );
  sideMenuBtn.forEach((btn) => {
    btn.classList.remove("button-secondary");
    btn.classList.add("button-primary");
    btn.querySelector(".monospace").style.color = "white";
  });
}

window.addEventListener("resize", () => {
  topBarHeight = document.querySelector(".topbar").clientHeight;
});
