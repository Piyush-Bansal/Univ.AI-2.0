const menuOptions = document.querySelector("#menu-options");
let menuOpen = false;
const closeSideMenu = document.querySelector("#close__side-menu");
const hamburger = document.querySelector("#hamburger");
const navCancel = document.querySelector("#nav-cancel");
const pageUrl = window.location.href.split("?")[0];
const navShare = document.querySelector("#nav-share");
const darkGrey6 = "#1c1c1c";

const openMenu = gsap.timeline({
  paused: true,
});
openMenu
  .to(".nav__bg", {
    display: "flex",
  })
  .to(".sidemenu", {
    x: "0%",
    duration: 0.4,
    ease: "Power2.easeOut",
  })
  .from(".submenu__item", {
    x: "-2%",
    opacity: 0,
    duration: 0.2,
    stagger: 0.2,
  })
  .from(
    ".sidemenu .separator",
    {
      width: "0%",
      stagger: 0.2,
      duration: 0.2,
    },
    "-=0.2"
  );

const closeMenu = gsap.timeline({
  paused: true,
});

closeMenu
  .to(".sidemenu", {
    x: "100%",
    duration: 0.4,
    ease: "Power2.easeOut",
  })
  .to(".nav__bg", {
    display: "none",
    duration: 0,
  });

menuOptions.addEventListener("click", () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    openMenu.restart();
    changeIcon();
  } else {
    closeMenu.restart();
    changeIcon();
  }
});

closeSideMenu.addEventListener("click", () => {
  closeMenu.restart();
  menuOpen = !menuOpen;
});

function changeIcon() {
  if (window.innerWidth < 1023) {
    if (menuOpen) {
      hamburger.style.display = "none";
      navCancel.style.display = "flex";
    } else {
      hamburger.style.display = "flex";
      navCancel.style.display = "none";
    }
  }
}

window.addEventListener("resize", changeIcon());

let topBarHeight = document.querySelector(".navbar-blog-homepage").clientHeight;

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
    section.classList.contains("bg-cobalt-blue-4") ||
    section.classList.contains("bg-dark-grey-6")
  ) {
    navDark();
  } else {
    navLight();
  }
}

function navDark() {
  const navSvg = document.querySelectorAll(".logo__code, .search__close-img");
  navSvg.forEach((icon) => {
    icon.style.color = "white";
  });

  document.querySelector(".sidemenu").style.backgroundColor = darkGrey6;
  document.querySelector(".topbar").style.backgroundColor = darkGrey6;

  const textLayer = document.querySelectorAll(
    ".navbar-blog-homepage p,.navbar-blog-homepage .monospace,.navbar-blog-homepage .h4, .navbar-blog-homepage .input__text, .navbar-blog-homepage .search__button"
  );

  textLayer.forEach((layer) => {
    layer.classList.add("is--dark");
  });

  document.querySelector(".logo__code-subrand").style.color = "#5795E4";

  const navSeparators = document.querySelectorAll(
    ".navbar-blog-homepage .separator"
  );
  navSeparators.forEach((separator) => {
    separator.style.backgroundColor = "#7A7A7A";
  });

  document.querySelector(".blog-categories:first-child").style.borderTopColor =
    "#7A7A7A";

  const hoverBG = document.querySelectorAll(".navbar-blog-homepage .hover-bg");
  hoverBG.forEach((bg) => {
    bg.style.backgroundColor = "#323232";
  });
  const sideMenuSeparator = document.querySelector(".sidemenu");
  sideMenuSeparator.style.borderLeftColor = "#7a7a7a";
}

function navLight() {
  const navSvg = document.querySelectorAll(".logo__code, .search__close-img");
  navSvg.forEach((icon) => {
    icon.style.color = darkGrey6;
  });

  document.querySelector(".sidemenu").style.backgroundColor = "white";
  document.querySelector(".topbar").style.backgroundColor = "white";

  const textLayer = document.querySelectorAll(
    ".navbar-blog-homepage p,.navbar-blog-homepage .monospace,.navbar-blog-homepage .h4, .navbar-blog-homepage .input__text, .navbar-blog-homepage .search__button"
  );
  textLayer.forEach((layer) => {
    layer.classList.remove("is--dark");
  });

  document.querySelector(".logo__code-subrand").style.color = "#3B7CD1";

  const navSeparators = document.querySelectorAll(
    ".navbar-blog-homepage .separator"
  );
  navSeparators.forEach((separator) => {
    separator.style.backgroundColor = "#D5D5D5";
  });

  document.querySelector(".blog-categories:first-child").style.borderTopColor =
    "#D5D5D5";

  const hoverBG = document.querySelectorAll(".navbar-blog-homepage .hover-bg");
  hoverBG.forEach((bg) => {
    bg.style.backgroundColor = "#f2f2f2";
  });

  const sideMenuSeparator = document.querySelector(".sidemenu");
  sideMenuSeparator.style.borderLeftColor = "#D5D5D5";
}

window.addEventListener("resize", () => {
  topBarHeight = document.querySelector(".navbar-blog-homepage").clientHeight;

  if (window.innerWidth > 1023) {
    const navHamburger = document.querySelectorAll(".hamburger");
    navHamburger.forEach((icon) => {
      icon.style.display = "none";
    });
  }
});

//share functionality
const facebook = document.querySelector("#nav-facebook");
const twitter = document.querySelector("#nav-twitter");
const linkedin = document.querySelector("#nav-linkedin");

facebook.addEventListener("click", () => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
});
twitter.addEventListener("click", () => {
  window.open(`https://twitter.com/intent/tweet?url=${pageUrl}`);
});
linkedin.addEventListener("click", () => {
  window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}`);
});

const shareData = {
  title: "Univ.AI",
  text: document.title,
  url: pageUrl,
};

navShare.addEventListener("click", async () => {
  await navigator.share(shareData);
});

window.addEventListener(
  "DOMContentLoaded",
  check(document.querySelector(".wf-section"))
);
