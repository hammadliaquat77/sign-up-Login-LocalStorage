let name = document.getElementById('name');
let fatherName = document.getElementById('father');
let email = document.getElementById('email');
let date = document.getElementById('date');
let radio = document.getElementsByName('gender');
let pass = document.getElementById('password');
let btn = document.getElementById('buton');

btn.addEventListener('click',function () {
    
    let i; 

    if (name.value == '' || fatherName.value == '' || email.value == '' || date.value == '' ||  pass.value == '') {
        alert('Please enter your Detail')
    }
    else{
        console.log(name.value);
        console.log(fatherName.value);
        console.log(email.value);
        console.log(date.value);
        console.log(pass.value);
 
        for (i = 0; i < radio.length; i++) {
             if (radio[i].checked) {
                console.log(radio[i].value);
                
             }
            
        }

    }
     

    if (name.value  && fatherName.value && email.value && date.value  && pass.value) {

     localStorage.setItem('name1', name.value)
     localStorage.setItem('fname1', fatherName.value)
     localStorage.setItem('email1', email.value)
     localStorage.setItem('pass1' , pass.value)
    //  localStorage.setItem('gender1', radio[i].value)

        alert('Thanks for Sign-up')
        window.location.href="login.html"
        
    }
    
});


