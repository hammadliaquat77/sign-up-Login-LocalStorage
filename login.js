let email = document.getElementById('Email');
let password = document.getElementById('Password');
let btn = document.getElementById('btn-login');

let user1 = localStorage.getItem('email1')
let user2 = localStorage.getItem('pass1')


btn.addEventListener('click' , function () {
    
    if (email.value && password.value ) {
        

        if (email.value == user1 || password.value == user2) {
           alert('Your Account ha been logend')
           console.log(email.value);
           console.log(password.value);
           
           

           window.location.href = 'https://hammadprogrammer77.github.io/Ecommerce-Cards-project/'
    
       }else{
           alert('incorrect email and password')
       }


    }else{
        alert('Please fill in all fields to login.')
    }


})