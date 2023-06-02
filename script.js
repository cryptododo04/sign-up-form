const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit-button');
const passwordError = document.getElementById('password-error');

firstNameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        lastNameInput.focus();
    }
});

lastNameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        emailInput.focus();
    }
});

emailInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        phoneInput.focus();
    }
});

phoneInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        passwordInput.focus();
    }
});

passwordInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        confirmPasswordInput.focus();
    }
});

confirmPasswordInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        validateForm();
    }
});

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    // Check for empty required inputs and display default error messages
    const inputs = [firstNameInput, lastNameInput, emailInput, phoneInput, passwordInput, confirmPasswordInput];
    let isValid = true;

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        if (input.checkValidity() === false) {
            input.reportValidity();
            isValid = false;
            break; // Stop the loop on the first invalid input
        }
    }

    if (!isValid) {
        return; // Stop form submission
    }

    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Perform password validation
    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match";
        passwordError.classList.add('error-animation');
        setTimeout(function() {
            passwordError.classList.remove('error-animation');
        }, 1000);
        return; // Stop form submission
    }

    // If all inputs are valid, proceed with form submission
    submitForm();
}

function submitForm() {
    // Perform form submission logic here
    // You can send the form data to a server or perform any other action
    // For demonstration purposes, we'll log the form data to the console
    console.log("Form submitted successfully!");
    console.log("First Name:", firstNameInput.value);
    console.log("Last Name:", lastNameInput.value);
    console.log("Email:", emailInput.value);
    console.log("Phone:", phoneInput.value);
    console.log("Password:", passwordInput.value);
    console.log("Confirm Password:", confirmPasswordInput.value);


   document.getElementById("form").submit();
  // Replace "your-form-id" with the actual ID of your form element
}

document.addEventListener("DOMContentLoaded", function() {
    var i = 0;
    var tag = document.getElementById("typeWritter");
    var html = document.getElementById("typeWritter").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 170;

    function typeWriter() {
        if (i <= txt.length) {
            document.getElementById("typeWritter").innerHTML = txt.slice(0, i + 1);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
