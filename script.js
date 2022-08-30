// check URL parameters and fill up the form

check_url();
// Check if URL has parameters
function check_url() {
  var url_string = window.location.href;
  var url = new URL(url_string);

  if (url.searchParams.get("utm_source") !== null) {
    store_parameter();
    fill_form();
  } else {
    check_storage();
  }
}

function store_parameter() {
  var url_string = window.location.href;
  var url = new URL(url_string);

  // store parameters in a variable
  var source = url.searchParams.get("utm_source");
  var medium = url.searchParams.get("utm_medium");
  var campaign = url.searchParams.get("utm_campaign");
  var content = url.searchParams.get("utm_content");

  sessionStorage.setItem("utm_source", source);
  sessionStorage.setItem("utm_medium", medium);
  sessionStorage.setItem("utm_campaign", campaign);
  sessionStorage.setItem("utm_content", content);
}

function check_storage() {
  if (sessionStorage.getItem("utm_source") !== null) {
    fill_form();
  } else {
    document.getElementById("source").value = "Direct Traffic";
  }
}

function fill_form() {
  document.getElementById("source").value =
    sessionStorage.getItem("utm_source");
  document.getElementById("medium").value =
    sessionStorage.getItem("utm_medium");
  document.getElementById("campaign").value =
    sessionStorage.getItem("utm_campaign");
  document.getElementById("content").value =
    sessionStorage.getItem("utm_content");
}
