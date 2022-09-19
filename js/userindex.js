import { getData } from "./constants.js";


 export function checkAuthorization(){
 let session =getData("users")

 if(session== undefined){      //y is it undefined here
    window.location="index.html"
 }
}

//to make te checkauthentication available on a global scope to make ot a lot eassierto access the fuction in the html
//hence we can easily call the function in our html file
window.checkAuthorization =checkAuthorization