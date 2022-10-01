import {getData } from "./constants.js"
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){
    event.preventDefault()

    const passwordField =form.elements["password"]


    // function displayError(element, message){
       
    //     const error = element.parentNode.querySelector("small")
    //     error.innerHTML = message
       
    //     return false
    // }



    const emailField= form.elements["email"]

let users = getData("users")

let usersDB = users==undefined? [] :JSON.parse(users)

let  checkData =  usersDB.find(user=>user.email==emailField.value &&
     user.password== passwordField.value)

     if(checkData===undefined){
    
    alert("invalid email address or password")  
    }
     else{
     
        // setData("session", JSON.stringify(checkData));
       
            window.location = "index.html";
       
  

        alert("congratulations")
     }
})
    
   


