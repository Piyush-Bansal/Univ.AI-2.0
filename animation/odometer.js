$(".starter-odometer").each(function () {
  // The Odometer script always represents a single 0 with an
  // initial value of 0 - no matter how many zeros are inserted.
  // For this reason there is a "1" at the beginning and at the end,
  // which is added to the desired value.
  // Note: The 1 at the end and at the end is also displayed in the
  // odometer, so you have to hide them via custom CSS.
  // In the last section of this page you will learn how to do that.
  var startValue = "1" + "0" + "1";
  // To avoid layout shifting, the endValue is constructed just
  // like the startValue - only this time with the desired end
  // value in the middle.
  var endValue = "1" + "123456.78" + "1";
  // Options for the odometer
  var odometer = new Odometer({
    // el tells the odometer script which element should be the odometer
    el: this,
    // value tells the odometer script what the start value should be
    value: startValue,
    // Change how digit groups are formatted, and how many digits
    // are shown after the decimal point
    format: "d",
    duration: 9000,
  });
  // Init odometer with the defined start value
  odometer.render(startValue);
  // Our trigger should be the current odometer (so "this" is .odometer._2)
  ScrollTrigger.create({
    // Our trigger should be the current odometer (so "this" is .odometer._2)
    trigger: this,
    // The following onEnter function should be triggered when 70% of the
    // viewport reaches the vertical center of our odometer
    start: "center 70%",
    // When the above condition is reached, the odometer should
    // be animated to the endValue
    onEnter: () => {
      odometer.update(endValue);
    },
  });
});
