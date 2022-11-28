window.addEventListener("load", () => {
  setTimeout(() => {
    let head = document.getElementsByTagName("head")[0];
    let commitId = "651e17f52ed13395fc0901a984374a873de6b9bf";
    let filePath = `https://cdn.jsdelivr.net/gh/Piyush-Bansal/Univ.AI-2.0@${commitId}/vite.js/univ_ai_2.1/javascript/`;
    let sources = [
      "horizontal_text.min.js",
      "footer%20year.min.js",
      "form.min.js",
      "marquee.min.js",
      "profiles.min.js",
      "modal.min.js",
      "variable%20aspect%20ratio.min.js",
    ];
    sources.forEach((source) => {
      console.log(filePath + source);
      let script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", filePath + source);
      document.head.appendChild(script);
    });
  }, "2000");
});
