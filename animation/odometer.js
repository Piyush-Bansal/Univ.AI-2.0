$(".starter-odometer").each(function () {
  var startValue = "1" + "0" + "1";
  let content = this.textContent;

  var endValue = content;
  var odometer = new Odometer({
    el: this,
    value: startValue,
    format: "d",
    duration: 15000,
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
