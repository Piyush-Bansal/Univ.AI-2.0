$(".starter-odometer").each(function () {
  var startValue = "1" + "0" + "1";
  let content = this.textContent;

  var endValue = "1" + content + "1";
  var odometer = new Odometer({
    el: this,
    value: startValue,
    format: "d",
    duration: 10000,
  });
  odometer.render(startValue);
  ScrollTrigger.create({
    trigger: this,
    start: "top 85%",
    onEnter: () => {
      odometer.update(endValue);
    },
  });
});
