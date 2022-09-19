// import { validatePassword } from "./validation.js";
import { setData, getData } from "./constants.js";
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){
    event.preventDefault()

    // const passwordField = document.querySelector("#password")     //here we target the field, not thr password input itself  
    const passwordField =form.elements["password"]
    // console.log(passwordField.value)
    // if(validatePassword(passwordField)){        
    //   setTimeout(()=>{
    //     window.location="index.html"
    //   }, 2000 )

    // }

    const emailField= form.elements["email"]
//get the data from local storage 
let users = getData("users")
//convert to JSON
let usersDB = users==undefined? [] :JSON.parse(users)

let  checkData =  usersDB.find(user=>user.email==emailField.value &&
     user.password== passwordField.value)

     if(checkData===undefined){
        alert("invalid username and password")
     }
     else{
     
        setData("session", JSON.stringify(checkData));
        setTimeout(() => {
            window.location = "index.html";
        }, 2000);
  

        alert("congratulations")
     }
})
    
   


