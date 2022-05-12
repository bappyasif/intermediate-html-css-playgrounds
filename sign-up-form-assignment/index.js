let btnEl = document.querySelector('button');
let passElem = document.querySelector('#u-password');
let confirmPass = document.querySelector('#c-password');
let formElem = document.querySelector('form');
let spanElem = document.querySelector('#error-msg')

let showError = () => {
    confirmPass.addEventListener('input', () => {
        // spanElem.textContent = '';
        if (passElem.value != confirmPass.value) {
            passElem.setCustomValidity('password do not match');
            spanElem.style.visibility = 'visible'
            spanElem.textContent = 'password do not match'
        } else if (passElem.validity.typeMismatch || confirmPass.validity.typeMismatch) {
            passElem.setCustomValidity('pattern mismatched');
            spanElem.textContent = 'pattern mismatched';
            console.log('een')
        } else if (passElem.validity.valueMissing || confirmPass.validity.valueMissing) {
            passElem.setCustomValidity('value can not be left empty');
            spanElem.textContent = 'value can not be left empty'
            console.log('twee')
        } else if (passElem.validity.tooShort || confirmPass.validity.tooShort) {
            passElem.setCustomValidity(`password length too short ${passElem.value.length}, length must be greater than or equal to 6`);
            spanElem.textContent = 'password length too short, length must be greater than or equal to 6'
            console.log('drie', passElem.validity, confirmPass.value, passElem.value)
        }
        spanElem.style.visibility = 'visible'
    });
}


formElem.addEventListener('submit', (event) => {
    if (!(passElem.validity.valid || confirmPass.validity.valid || passElem.value != confirmPass.value)) {
        showError();
        event.preventDefault();
    } else {
        alert('veel success!!')
        spanElem.style.visibility = 'hidden'
    }
});




passElem.addEventListener('input', showError)

confirmPass.addEventListener('input', showError)

/**
 * 
 * 
 // let handleClick = evt => {
//     evt.preventDefault()
//     showError();
//     console.log('vier')
// }

// btnEl.addEventListener('submit', handleClick)
 * 
 * 
 let handleClick = evt => {
    console.log('here!!')
    evt.preventDefault();
    if(passElem.value != confirmPass.value) {
        passElem.classList.add('password-error')
    }
}
 */