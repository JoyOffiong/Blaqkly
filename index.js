let menuBar=document.querySelector('.nav-toggle1'),
    closeBar=document.querySelector('.nav-toggle2'),
    navBar=document.querySelector('.mobilenav');
    mainBody=document.getElementById('bodywrap')

    menuBar.addEventListener('mouseover', () =>{
            menuBar.style.display='none'
            navBar.style.transform='translateX(0%)'
            closeBar.style.display='block'
            mainBody.style.overflow='hidden'
          
        
    })
    closeBar.addEventListener('mouseover',()=>{
            menuBar.style.display='block'
            closeBar.style.display='none'
            navBar.style.transform='translateX(-100%)'
        }
    )