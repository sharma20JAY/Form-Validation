const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    validateInputs()
})

const validateInputs = ()=>{
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const cPasswordValue = cPassword.value.trim()

    if (usernameValue === "")    {
        setError(username,'Username is requried')   
    }
    else{
        setSuccess(username)
    }
    if (emailValue === "") {
        setError(email, "Email is Required") 
    }else if(!isValidEmail(emailValue)){
        setError(email, "Provide a Valid Email Address")
    }
    else{
        setSuccess(email)
    }
    if (passwordValue === ""){
        setError(password,"Password is Required")
    }else if(passwordValue.length < 8){
        setError(password,"Password needs to be more than 8 charcters")
    }
    else{
        setSuccess(password)
    }

    if (cPasswordValue === ""){
        setError(cPassword,"Password is Required")
    }
    else if(cPasswordValue !==  passwordValue ){
        setError(cPassword, "Password doesn't match")
    }
    else{
        setSuccess(cPassword)
    }
}

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add("error")
    inputControl.classList.remove("success")

}

const setSuccess = element=>{
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error')

errorDisplay.innerText = ""
inputControl.classList.add("success")
inputControl.classList.remove("error")
}

function isValidEmail(e){
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}

