// function internalLink(myLink) {
//   return myLink.host == window.location.host;
// }
// $("a").each(function () {
//   if (internalLink(this) && this.href.indexOf("#") === -1) {
//     $(this).click(function (e) {
//       e.preventDefault();
//       var moduleURL = jQuery(this).attr("href");
//       setTimeout(function () {
//         window.location = moduleURL;
//       }, 950);
//       // Class that has page out interaction tied to click
//       $(".transition__trigger").click();
//     });
//   }
// });

// grab all links
const links = document.querySelectorAll("a");
const currentPage = window.location.href.split("?")[0];

links.forEach((link) => {
  //target url
  const target = link.href;
  if (
    target.split("#")[0] !== currentPage &&
    target.split("?")[0] !== currentPage
  ) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => {
        window.location = target;
      }, 950);
      document.querySelector(".transition__trigger").click();
    });
  }
});
