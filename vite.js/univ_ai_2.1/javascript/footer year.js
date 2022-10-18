window.addEventListener("load", () => {
  //add year on footer
  const footerYear = document.querySelector(".year");
  footerYear.innerHTML = new Date().getFullYear();
});
