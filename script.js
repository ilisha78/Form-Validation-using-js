
function validation(){
let Uname= document.getElementById("name");
let email= document.getElementById("email");
let password1= document.getElementById("password1");
let password2= document.getElementById("password2");
let errName= document.getElementById("error-username");
let errMail= document.getElementById("error-email");
let errPw1= document.getElementById("error-password1");
let errPw2= document.getElementById("error-password2");
let btn= document.getElementById("submit");

    if (Uname.value.trim() === ""){
        errName.innerHTML="Please enter your username";
        Uname.classList.add("inpBox");
    }
    else if(Uname.value.length < 5){
        errName.innerHTML= "username should not less then 5";
        Uname.classList.add("inpBox");
    }
    else{
        errName.innerHTML="";
        Uname.classList.remove("inpBox");
    }

    if(email.value.trim()===""){
        errMail.innerHTML="Please enter your email";
        email.classList.add("inpBox");
    }
    else if(!email.value.includes("@gmail.com")){
        errMail.innerHTML="Please enter a valid email";
        email.classList.add("inpBox");
    }
    else{
        errMail.innerHTML="";
        email.classList.remove("inpBox");
    }

    if(password1.value.trim() ===""){
        errPw1.innerHTML="Please enter your password";
        password1.classList.add("inpBox");
    }
    else if(!/\d/.test(password1.value)){
        errPw1.innerHTML="Password must contain numbers";
        password1.classList.add("inpBox");
    }
    else{
        errPw1.innerHTML="";
        password1.classList.remove("inpBox");
    }

    if(password2.value.trim()===""){
        errPw2.innerHTML="Please confirm your password";
        password2.classList.add("inpBox")
    }
    else if(password2.value !== password1.value){
        errPw2.innerHTML="Password should be same";
        password2.classList.add("inpBox");
    }
    else{
        errPw2.innerHTML="";
        password2.classList.remove("inpBox");
    }

}


