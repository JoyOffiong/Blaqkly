import { validatePassword, showError } from "./validation.js";
const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const passwordField = form.elements["password"];
  const cpasswordField = form.elements["cpassword"];


  if (passwordField.value !== cpasswordField.value) {
    return showError(
      cpasswordField,
      "mismatch password, please look well abeg"
    );
  }

  //validate the strength of the password

  if (validatePassword(passwordField) && validateEmail() === 2) {
    alert("GOD ABEG");
    register(passwordField);
  }

});

function validateEmail() {
  const emailField = form.elements["email"];

  let existingInfo = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : false;

  if (existingInfo === false) {

 return 2


  } else {

let check =existingInfo.find( user=> user.email === emailField.value);
    if(check === undefined) {
    
      return 2;
    }
    
    else{
      showError(emailField, "email address already exists")
      return 1;
    }
       
 
}
}


function register(passwordField) {
  const firstNameField = form.elements["first name"];
  const lastNameField = form.elements["last name"];
  const emailField = form.elements["email"];

  const regData = {
    firstName: firstNameField.value,
    lastName: lastNameField.value,
    email: emailField.value,
    password: passwordField.value,
  };

  let existingUserInfo = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  existingUserInfo.push(regData);
  localStorage.setItem("users", JSON.stringify(existingUserInfo));

    window.location = "index.html";

}

