window.addEventListener("load", () => {
  setTimeout(() => {
    let head = document.getElementsByTagName("head")[0];
    let commitId = "44cc878d4f5b71ec7a86d8d43fe76d9745982cbc";
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
