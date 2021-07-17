// Variable Declarations
const form = document.querySelector('#glForm');
const firstName = document.querySelector('#fname');
const email = document.querySelector('#email');
const phone = document.querySelector('#number');
const password = document.querySelector('#password');
const cpassowrd = document.querySelector('#cpassword');

// Event Listeners
form.addEventListener('submit' , (event) => {
    event.preventDefault();
    validate();
});

const sendData = (sRate , count) => {
    if(sRate === count) {
        swal("Good job!", "Form is Submitted Successfully", "success");
        form.reset();
    }
}

const successMessage = () => {
    let formCtrl = document.getElementsByClassName('form-field');
    let count = formCtrl.length - 1;
    for(var i=0; i<formCtrl.length; i++) {
        if(formCtrl[i].className === "form-field success") {
            let sRate = 0+i;
            sendData(sRate , count)
        }
    }
}

// Email Validation
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}

// Validate Function
const validate = () => {
    const firstNameVal = firstName.value.trim();
    // const lastNameVal = lastName.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpassowrdVal = cpassowrd.value.trim();

    // validate Firstname
    if(firstNameVal === '') {
        setErrorMsg(firstName, 'This information is required');
    } else if (firstNameVal.length <= 3) {
        setErrorMsg(firstName, 'First Name should be atleast of 4 Characters');
    } else {
        setSuccessMsg(firstName);
    }

    // validate Email
    if(emailVal === '') {
        setErrorMsg(email, 'This information is required');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Not a valid Email');
    } else {
        setSuccessMsg(email);
    }

    // validate Phone
    if(phoneVal === '') {
        setErrorMsg(phone, 'This information is required');
    } else if (phoneVal.length !== 10) {
        setErrorMsg(phone, 'Not a valid phone number!');
    } else {
        setSuccessMsg(phone);
    }

    // Validate Passowrd
    if(passwordVal === '') {
        setErrorMsg(password, 'This information is required');
    } else if (passwordVal.length < 8) {
        setErrorMsg(password, 'Password Length should not be less then 8');
    } else {
        setSuccessMsg(password);
    }

    // validate Confirm Passowrd
    if(cpassowrdVal === '') {
        setErrorMsg(cpassowrd, 'This information is required');
    } else if (passwordVal !== cpassowrdVal) {
        setErrorMsg(cpassowrd, 'Passwords are not matching');
    } else {
        setSuccessMsg(cpassowrd);
    }

    successMessage();

}
function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = errormsgs;
    formControl.classList.add('error');
}
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.classList.add('success');
    formControl.classList.remove('error');
}