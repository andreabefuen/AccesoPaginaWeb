var nombreError = document.getElementById('nombre-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var confirmPassError = document.getElementById('confirm-password-error');
var formError = document.getElementById('form-error');

function validateName() {
    var nombre = document.getElementById('nombre').value; 
    
    if (nombre.length == 0) {
        nombreError.innerHTML = "<img src='images/error-icon.svg'>";
        return false;
    }
    if (!nombre.match(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/)) {
        nombreError.innerHTML = "<img src='images/error-icon.svg'>";
        return false;
    }
    nombreError.innerHTML = "<img src='images/success-icon.svg'>";
    return true;
}
function validateEmail() {
    var email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = "<img src='images/error-icon.svg'>";
        return false;
    }
    if (!email.match(/^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/)) {
        emailError.innerHTML = "<img src='images/error-icon.svg'>";
        return false;
    }
    emailError.innerHTML = "<img src='images/success-icon.svg'>";
    return true;
}

function validatePassword() {
    var password = document.getElementById('password').value;

    if (password.length == 0) {
        passwordError.innerHTML = "<img src='images/error-icon.svg'>";
        return false;
    }
    //minimo 6 caracteres y maximo 8
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,8}/)) {
        passwordError.innerHTML = "<img src='images/error-icon.svg'>";
        return false;
    }
    passwordError.innerHTML = "<img src='images/success-icon.svg'>";
    return true;
}

function validateSamePassword() {
    var password = document.getElementById('password').value;
    var confirmPass = document.getElementById('confirm-password').value;

    if (password != confirmPass) {
        confirmPassError.innerHTML = "<img src='images/error-icon.svg'>";
        return false;
    }
    confirmPassError.innerHTML = "<img src='images/success-icon.svg'>";
    return true;
}

function validarCampos() {
    console.log("validando campos");
    if (!validateName()||  !validateEmail() || !validateSamePassword()) {
        formError.style.display = 'block';
        formError.innerHTML = "<img src='images/error-icon.svg'>" + " COMPRUEBA LOS CAMPOS INTRODUCIDOS";
        setTimeout(function () { formError.style.display = 'none'; }, 3000);
        return false;
        
    }
}