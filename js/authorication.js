
 export function checkAuthorization(){
    let session =localStorage.getItem("users")
   
    if(session== undefined){      //y is it undefined here
       window.location="index.html"
    }
    else{
        alert("shoot")
    }
   }
   