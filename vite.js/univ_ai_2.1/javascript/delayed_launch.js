window.addEventListener("load", () => {
  setTimeout(() => {
    let head = document.getElementsByTagName("head")[0];
    let commitId = "227f0e20d9f0e6bd252e421a5e91ad5960af220d";
    let filePath = `https://cdn.jsdelivr.net/gh/Piyush-Bansal/Univ.AI-2.0@${commitId}/vite.js/univ_ai_2.1/javascript/`;
    let sources = [
      "marquee.min.js",
      "variable%20aspect%20ratio.min.js",
      "reduce%20columns.min.js",
      "modal.min.js",
      "form.min.js",
      "footer%20year.min.js",
    ];
    sources.forEach((source) => {
      console.log(filePath + source);
      let script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", filePath + source);
      document.head.appendChild(script);
    });
  }, "5000");
});
