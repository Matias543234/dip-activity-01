// Activity 1: Simple Login Form Validation
//
// Write JavaScript to validate a login form.
// Check that both fields are filled in before allowing submission.
// Show error messages when fields are empty.
//
// Open activity-1.md for detailed instructions.


const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const success = document.getElementById('success');



function showError(error, message){

    error.textContent = message;
    error.classList.add('visible');


}


function hideError(error){
    error.classList.remove('visible');

}

function validateUsername(){
    if (usernameInput.value.trim() === ''){
        showError(usernameError, 'Username is required');
        return false;




    }
    hideError (usernameError)
    return true;


}

function validatePassword(){   
    if (passwordInput.value === '') {
        showError(passwordError, 'Password is required');
        return false;



    }
    hideError (passwordError)
    return true;





}
function onUsernameBlur(){
    validateUsername();
}

function onPasswordBlur(){
    validatePassword();

}


function onSubmit (e){
    e.preventDefault();

    const usernameValid = validateUsername();
    const passwordValid = validatePassword();
    if (usernameValid && passwordValid) {
        form.style.display = 'none';
        success.classList.add('visible');


    }




}

usernameInput.addEventListener('blur', onUsernameBlur);
passwordInput.addEventListener('blur', onPasswordBlur);
form.addEventListener('submit', onSubmit);