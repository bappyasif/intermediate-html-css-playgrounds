let btnEl = document.querySelector('button');
let passElem = document.querySelector('#u-password');
let confirmPass = document.querySelector('#c-password');
let formElem = document.querySelector('form');
let spanElem = document.querySelector('#error-msg')

let showError = () => {
    confirmPass.addEventListener('input', () => {
        // console.log(passElem, passElem.value)
        // spanElem.textContent = '';
        if (passElem.value != confirmPass.value) {
            // alert('errorrrr')
            // passElem('password do not match');
            spanElem.textContent = 'password do not match';
            // spanElem.style.visibility = 'visible'
        } else if (passElem.validity.typeMismatch || confirmPass.validity.typeMismatch) {
            // passElem.setCustomValidity('pattern mismatched');
            spanElem.textContent = 'pattern mismatched';
            // passElem.reportValidity()
            console.log('een')
        } else if (passElem.validity.valueMissing || confirmPass.validity.valueMissing) {
            passElem.setCustomValidity('value can not be left empty');
            // passElem.reportValidity()
            spanElem.textContent = 'value can not be left empty'
            console.log('twee')
        } else if (passElem.validity.tooShort || confirmPass.validity.tooShort) {
            passElem.setCustomValidity(`password length too short ${passElem.value.length}, length must be greater than or equal to 6`);
            // passElem.reportValidity()
            spanElem.textContent = 'password length too short, length must be greater than or equal to 6'
            console.log('drie', passElem, passElem.validity, confirmPass.value, passElem.value)
        }
        spanElem.style.visibility = 'visible'
    });
}


formElem.addEventListener('submit', (event) => {
    if (!(passElem.validity.valid || confirmPass.validity.valid)) {
        showError();
        event.preventDefault();
    } else {
        // alert('veel success!!')
        // spanElem.style.visibility = 'hidden';
        if (passElem.value != confirmPass.value) {
            alert('errorrrr')
            event.preventDefault();
            showError();
        } else {
            alert('veel success!!')
            spanElem.style.visibility = 'hidden'
        }
    }
    // spanElem.style.visibility = 'hidden'
});


// let handleClick = evt => {
//     evt.preventDefault()
//     showError();
//     console.log('vier')
// }

passElem.addEventListener('input', showError)

confirmPass.addEventListener('input', showError)

// btnEl.addEventListener('submit', handleClick)

/**
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