import { validatePassword, showError } from "./validation.js";
import { setData, getData } from "./constants.js";
import { checkAuthorization } from "./userindex.js";
// import { validateEmail } from "./validation.js";
const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const passwordField = form.elements["password"];
  const cpasswordField = form.elements["cpassword"];
  // const emailField= form.elements["email"]

  //here we are comparing cpassword to password

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
  // if((validatePassword(passwordField))){
  //   register(passwordField)

  // }
});

function validateEmail() {
  const emailField = form.elements["email"];

  let existingInfo = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : false;
  alert(existingInfo);

  if (existingInfo === false) {
 chichi=2;


  } else {
    let chichi;
    existingInfo.find((user) => {
      check(user);

    });
        return chichi
    function check(user) {
      if (user.email === emailField.value) {
        alert("already exist");
        showError(emailField, "email address already exists");
      chichi=1;
   
      } 
      else {
       
      chichi= 2;
      
      }
    
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

  setTimeout(() => {
    window.location = "index.html";
  }, 10000);
}

/* //get existing data
  let usersInfo = localStorage.getItem;
  usersInfo = usersInfo === undefined ? JSON.parse(getData) : []
 
  // let users = ;
  if(usersInfo){
    users.push(regData);
    setData("users", JSON.stringify(users));
       console.log(users) 
    alert("registration successful, ");
  
    setTimeout(() => {
      window.location = "Blaqkly/index.html";
    }, 10000);
  }

    }*/

// else if (usersInfo === getData) {

//   let v= usersInfo.find(user=>{ check(user) });
//   console.log(v)

//     function check(user) {

//     if(user.email === emailField.value)
//     {
//     showError(emailField, "email address already exists")
//     return false
//     }
//        let users =  [];
// users.push(regData);
// setData("users", JSON.stringify(users));

// alert("registration successful, ");

// setTimeout(() => {
//   window.location = "index.html";
// }, 10000);

// console.log(check)

// }

// } else {
//  return false
// }
