window.addEventListener("load", () => {
  setTimeout(() => {
    let head = document.getElementsByTagName("head")[0];
    let sources = [
      "https://cdn.jsdelivr.net/gh/Piyush-Bansal/Univ.AI-2.0@227f0e20d9f0e6bd252e421a5e91ad5960af220d/vite.js/univ_ai_2.1/javascript/marquee.min.js",
      "https://cdn.jsdelivr.net/gh/Piyush-Bansal/Univ.AI-2.0@227f0e20d9f0e6bd252e421a5e91ad5960af220d/vite.js/univ_ai_2.1/javascript/variable%20aspect%20ratio.min.js",
      "https://cdn.jsdelivr.net/gh/Piyush-Bansal/Univ.AI-2.0@227f0e20d9f0e6bd252e421a5e91ad5960af220d/vite.js/univ_ai_2.1/javascript/reduce%20columns.min.js",
      "https://cdn.jsdelivr.net/gh/Piyush-Bansal/Univ.AI-2.0@227f0e20d9f0e6bd252e421a5e91ad5960af220d/vite.js/univ_ai_2.1/javascript/modal.min.js",
      "https://cdn.jsdelivr.net/gh/Piyush-Bansal/Univ.AI-2.0@227f0e20d9f0e6bd252e421a5e91ad5960af220d/vite.js/univ_ai_2.1/javascript/form.min.js",
      "https://cdn.jsdelivr.net/gh/Piyush-Bansal/Univ.AI-2.0@227f0e20d9f0e6bd252e421a5e91ad5960af220d/vite.js/univ_ai_2.1/javascript/footer%20year.min.js",
    ];
    sources.forEach((source) => {
      let script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", source);
      document.head.appendChild(script);
    });
  }, "5000");
});
