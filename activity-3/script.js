// Activity 2: Registration Form Validation
//
// Write JavaScript to validate a registration form with 4 fields.
// Validate on blur (when user leaves a field) and on submit.
// Show appropriate error messages for each type of invalid input.
//
// Open activity-2.md for detailed instructions.
const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById ('email')
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError')
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError')
const success = document.getElementById('success');


function showError (error, message){

    error.textContent = message;
    error.classList.add('visible')

}

function hideError (error){
    error.classList.remove('visible')
}



function validateUsername(){
    if (usernameInput.value.trim().length < 3 ){
        showError(usernameError, 'Username must be at least more than 3 characters!');
        return false 
    }
    hideError (usernameError)


    if (usernameInput.value.trim().length > 32){
        showError(usernameError, 'Username must be 32 characters or fewer!')
        return false
    }   

    if (usernameInput.value.includes(' ')){
        showError(usernameError, 'Username can not contain spaces!')
        return false



    }
    if (!usernameInput.value.match(/^[a-zA-Z0-9]+$/)){
        showError(usernameError, 'Username should not contain special characters!')
        return false  

}
    hideError(usernameError)
    return true
}


function validateEmail(){
    if (emailInput.value.trim() === ''){
        showError(emailError, 'Email is required!');
        return false
    }
    
    if(!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        showError(emailError, 'Enter a valid email address!')
        return false
    }
    hideError(emailError)
    return true
}






function validatePassword(){
    if (passwordInput.value.trim() === ''){
        showError(passwordError, 'Password is required!');
        return false 
    }
    if (passwordInput.value.trim().length < 6){
        showError(passwordError, 'Enter a password that is 6 characters or more!')
        return false
    }
    hideError (passwordError)
    return true


}

function validateConfirmPassword(){
    if (confirmPasswordInput.value.trim() === ''){
        showError(confirmPasswordError, 'Password confirmation is required!')
        return false


    }
    if (confirmPassword.value !== passwordInput.value){
        showError(confirmPasswordError, 'It is not the same password!')
        return false
    }
    hideError (confirmPasswordError) 
    return true




}

function onUsernameBlur(){
    validateUsername();
}

function onEmailBlur(){
    validateEmail();
}

function onPasswordBlur(){
    validatePassword();

}

function onConfirmPasswordBlur(){
    validateConfirmPassword();

}


usernameInput.addEventListener('blur', onUsernameBlur);
emailInput.addEventListener('blur', onEmailBlur);
passwordInput.addEventListener('blur', onPasswordBlur)
confirmPasswordInput.addEventListener('blur', onConfirmPasswordBlur)

function onSubmit(e){
    e.preventDefault();

    const usernameValid = validateUsername();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    const confirmPasswordValid = validateConfirmPassword();

    if (usernameValid && emailValid && passwordValid && confirmPasswordValid){
        form.style.display = 'none';
        success.classList.add('visible');
        }
}

form.addEventListener('submit', onSubmit);