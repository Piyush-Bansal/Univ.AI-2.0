const textRevealRt = document.querySelectorAll(
  ".text-reveal-rt p, .text-reveal-rt li "
);
textRevealRt.forEach((item) => {
  const textBreakupH = new SplitType(item, { types: "lines" });
});
