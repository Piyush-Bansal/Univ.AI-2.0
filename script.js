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

//get country and change values

let intr = document.getElementsByClassName("int");
let ind = document.getElementsByClassName("inr");
let country = sessionStorage.getItem("country");
const api_url = "https://course.univ.ai/cc/";

//Get user location
async function getLocation() {
  const response = await fetch(api_url);
  const data = await response.json();
  country = data.cc;
  sessionStorage.setItem("country", country);
  remove(country);
  fillCountryCode();
}

//Remove objects
function remove(country) {
  if (country == "IN") {
    for (var i = 0; i < intr.length; i++) {
      intr[i].style.display = "none";
    }
    for (var i = 0; i < ind.length; i++) {
      ind[i].style.display = "block";
    }
  } else {
    for (var i = 0; i < intr.length; i++) {
      intr[i].style.display = "block";
    }
    for (var i = 0; i < ind.length; i++) {
      ind[i].style.display = "none";
    }
  }
}

//Check for country
if (country == null) {
  getLocation();
} else {
  remove(country);
  fillCountryCode();
}

//fill up the country code

async function fillCountryCode() {
  const countryCodeField = document.querySelector("#country-code");
  const countryField = document.querySelector("#country");
  const findCountryCodeURL = `https://restcountries.com/v3.1/alpha?codes=${country}`;
  let countryCode = [];
  let countryResponse = [];
  const response = await fetch(findCountryCodeURL);
  const data = await response.json();
  countryCode = `${data[0].idd.root}${data[0].idd.suffixes[0]}`;
  countryResponse = data[0].name.common;
  countryCodeField.value = countryCode;
  countryField.value = countryResponse;
}

//send form data to make.com
