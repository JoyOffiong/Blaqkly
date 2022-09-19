/*here, this is only triggered if the error password regresion exp isnt contained in the password inputed */

 export function showError(element, errorMessage){
    const errorBox = element.parentNode.querySelector("small")
    const errorLine= element.parentNode.querySelector("span")
        errorBox.innerHTML = errorMessage
        errorLine.innerHTML=errorMessage
        element.className ="error"
     
        return false
}


/*password verification: the input itself and in order to use this function in another js file, we need to export it*/ 
 export function validatePassword(element){
    const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
     const password = element.value.trim()   //here the container houses the value inputed , trim() takes out spaces inbetween
     

     if(!passwordRegex.test(password)){       //what is not the regex existing in the password
                                                 
         showError(element, "Strong Password Required")
         // alert("give strong password")
         return false   
     }
        return true
 }


//  /*email verification */
// function getValue(){
//   return{ email: document.getElementById("email").value}
// }

// // let mail=  document.getElementById("email").value
 
//  export function validateEmail(emailField) {
  
//    let usersInfo= JSON.parse(localStorage.getItem("users"))
 
//    let{email}= getValue()

//    console.log(email)

//    usersInfo.forEach(user => {

//      if(email == user.email){

//       console.log(user.email)
//    //   return exist=true
//        return showError(emailField, "email address already exists")
       
//      }
//    })
 

//    }
