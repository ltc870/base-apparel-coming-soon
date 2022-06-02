const formEl = document.querySelector('.form-section');
const errorIcon = document.querySelector('.form-error-icon');
const errorMsg = document.querySelector('.form-error-msg');
const formBtn = document.querySelector('.form-btn');
const input = document.querySelector('input');
const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



// When user clicks outside of the input, error icon and msg appears
// When user enters the wrong email format, error icon and msg appears
// When user enters the right email, alert msg pops up


formBtn.addEventListener('click', error)

function error() {
    if(input.value === '' || !regEx.test(input.value)) {
        errorMsg.style.display = 'block';
        errorIcon.style.display = 'block';
    }
}

input.addEventListener('input', errorHide);

function errorHide() {
    errorMsg.style.display = 'none';
    errorIcon.style.display = 'none';
}







