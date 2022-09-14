let loader = document.querySelectorAll(".starter-odometer");
loader.forEach((value) => {
  let start = "1" + "0" + "1";
  let endValue = "1" + "123456.78" + "1";

  let odometer = new Odometer({
    el: this,
    value: start,
    format: "d",
    duration: 9000,
  });

  odometer.render(startValue);

  ScrollTrigger.create({
    trigger: this,
    start: "center 70%",
    onEnter: () => {
      odometer.update(endValue);
    },
  });
});
