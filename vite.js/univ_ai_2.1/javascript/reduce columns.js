window.addEventListener("load", () => {
  const multiColumns = document.querySelectorAll(".is--2-column-split");
  multiColumns.forEach((multiColumn) => {
    if (multiColumn.textContent.length < 320) {
      console.log("less");
      multiColumn.classList.remove("is--2-column-split");
      multiColumn.classList.add("spread-4");
    }
  });
});
