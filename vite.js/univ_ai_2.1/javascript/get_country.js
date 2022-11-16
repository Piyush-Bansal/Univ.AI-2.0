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
  if (country === "IN") {
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
