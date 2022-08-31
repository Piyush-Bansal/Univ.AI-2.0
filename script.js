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

//send form data to make.com

//grab form element
const form = document.querySelector("#wf-form-common-form");
const formBtn = document.querySelector("#submit");
const success = document.querySelector("#success");
const error = document.querySelector("#error");

//grab form values
const fName = document.querySelector("#first-name");
const lName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phNumber =
  document.querySelector("#country-code").value +
  document.querySelector("#phone-number").value;
const city = document.querySelector("#city");
const profession = document.querySelector("#profession");
const workplace = document.querySelector("#workplace");
const college = document.querySelector("#college");
const programingKnowledge = document.querySelector("#prog-exp");
const source = document.querySelector("#source");
const medium = document.querySelector("#medium");
const campaign = document.querySelector("#campaign");
const formCountry = document.querySelector("#country");
const content = document.querySelector("#content");
let formError = false;
let formData = new FormData();

//hide all the helper text and error
removeErrors();

//prevent default

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formError = false;
  removeErrors();
  checkForEmpty();

  if (formError == false) {
    //append data to the form

    formData.append("fName", fName.value);
    formData.append("lName", lName.value);
    formData.append("email", email.value);
    formData.append("phNumber", phNumber);
    formData.append("city", city.value);
    formData.append("profession", profession.value);
    formData.append("workplace", workplace.value);
    formData.append("college", college.value);
    formData.append("programingKnowledge", programingKnowledge.value);
    formData.append("source", source.value);
    formData.append("medium", medium.value);
    formData.append("campaign", campaign.value);
    formData.append("formCountry", formCountry.value);
    formData.append("content", content.value);

    //send the data to webhook
    formBtn.value = "Processing..";

    fetch("https://hook.us1.make.com/0frl3c5by3jxqd04ly8e93ammzt03fnr", {
      method: "POST",
      "Content-Type": "multipart/form-data; boundary=---generatedboundary",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("ok");
          return response.json();
        } else {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
      })
      .then((data) => {
        formBtn.value = "Submit";
        form.style.display = "none";
        error.style.display = "none";
        success.style.display = "block";
        success.scrollIntoView();
      })
      .catch((err) => {
        console.log("error");
        formBtn.value = "Submit";
        error.style.display = "block";
        form.style.display = "grid";
        success.style.display = "none";
      });
  }
});

function checkForEmpty() {
  if (fName.value === "") {
    setErrorFor(fName, "First name cannot be blank");
  }

  if (lName.value === "") {
    setErrorFor(lName, "Last name cannot be blank");
  }

  if (email.value === "") {
    setErrorFor(email, "Email name cannot be blank");
  } else {
    if (!isEmail(email.value)) {
      setErrorFor(email, "Not a valid email");
    }
  }

  if (document.querySelector("#phone-number").value === "") {
    setErrorFor(
      document.querySelector("#phone-number"),
      "Phone number cannot be empty"
    );
  } else {
    if (!isPhone(document.querySelector("#phone-number").value)) {
      setErrorFor(
        document.querySelector("#phone-number"),
        "Enter a valid phone number"
      );
    }
  }

  if (city.value === "") {
    setErrorFor(city, "City cannot be empty");
  }

  if (profession.value === "") {
    setErrorFor(profession, "Please select a value");
  }

  if (college.value === "") {
    setErrorFor(college, "College/University cannot be empty");
  }

  if (programingKnowledge.value === "") {
    setErrorFor(programingKnowledge, "Please select a value");
  }
}

function setErrorFor(input, message) {
  input.classList.add("is--error");
  const formControl = input.parentElement;
  const helper = formControl.querySelector(".helper");
  helper.classList.remove("hide");
  const errText = helper.querySelector(".helper-text");
  errText.innerText = message;
  errText.classList.add("is--red-4");
  formError = true;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPhone(phone) {
  return /^[0-9-+s()]*$/.test(phone);
}

function removeErrors() {
  const helper = form.querySelectorAll(".helper");
  helper.forEach((help) => {
    help.classList.add("hide");
    const helperText = help.querySelector(".helper-text");
    helperText.classList.remove("is--red-4");
  });

  const formInput = form.querySelectorAll("input");
  formInput.forEach((input) => {
    input.classList.remove("is--error");
  });

  const formSelect = form.querySelectorAll("select");
  formSelect.forEach((selection) => {
    selection.classList.remove("is--error");
  });
}

//add year on footer
const footerYear = document.querySelector(".footer.year");
footerYear.innerHTML = new Date().getFullYear();
