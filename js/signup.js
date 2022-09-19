import { validatePassword, showError } from "./validation.js";
import { setData, getData } from "./constants.js";
import { checkAuthorization } from "./userindex.js";
// import { validateEmail } from "./validation.js";
const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const passwordField = form.elements["password"];
  const cpasswordField = form.elements["cpassword"];
  const emailField= form.elements["email"]

  //here we are comparing cpassword to password

  if (passwordField.value !== cpasswordField.value) {
    return showError(
      cpasswordField,
      "mismatch password, please look well abeg"
    );
  }

  //validate the strength of the password

  if(validatePassword(passwordField)){
    register(passwordField, emailField)
  }
//  validateEmail(emailField)
 
});



//  function validateEmail(emailField){
//   const firstNameField = form.elements["first name"];
//   const lastNameField = form.elements["last name"];
//   const emailField = form.elements["email"];

//   const regData = {
//     firstName: firstNameField.value,
//     lastName: lastNameField.value,
//     email: emailField.value,
//     password: passwordField.value,
//   };

//   availableUser.push(regData)

//  let firstTimer=  setData("users", availableUser)
//   console.log(firstTimer)

//   let usersInfo=   (firstTimer === undefined)? JSON.parse(localStorage.getItem("users")):[]
//   // let usersInfo = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

//   let v= usersInfo.find(user=>{ check(user) });
// console.log(v)
//  alert(false)
//   function check(user) {
  
//   if(user.email === emailField.value)
//   {
//   showError(emailField, "email address already exists")
//   return false
//   }
//   register(passwordField)
//   return true   
  
//   }
//  } 


function register(passwordField, emailField) {
  const firstNameField = form.elements["first name"];
  const lastNameField = form.elements["last name"];
  // const emailField = form.elements["email"];

  const regData = {
    firstName: firstNameField.value,
    lastName: lastNameField.value,
    email: emailField.value,
    password: passwordField.value,
  };
  //get existing data
  let usersInfo =JSON.parse(localStorage.getItem("users"))
  usersInfo = usersInfo== undefined ? JSON.parse(localStorage.getItem("users")) : []


  console.log(usersInfo)

if (usersInfo ==undefined) {
  // let users = JSON.parse(getData("users")) || [];
  let users =  [];
  users.push(regData);
  setData("users", JSON.stringify(users));
      
  alert("registration successful, ");

  setTimeout(() => {
    window.location = "index.html";
  }, 10000);

    }


    
    let v= usersInfo.find(user=>{ check(user) });
    console.log(v)
     
      function check(user) {
  
      
      if(user.email === emailField.value)
      {
      showError(emailField, "email address already exists")
      return false
      } 
         let users =  [];
  users.push(regData);
  setData("users", JSON.stringify(users));
      
  alert("registration successful, ");

  setTimeout(() => {
    window.location = "index.html";
  }, 10000);
  
  
    
     
}


}


