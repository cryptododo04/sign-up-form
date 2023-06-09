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
    const inputs = [firstNameInput, lastNameInput, emailInput, phoneInput, passwordInput, confirmPasswordInput];
    let firstInvalidInput = null;
  
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.checkValidity() === false) {
        input.classList.add('invalid-input');
        if (!firstInvalidInput) {
          firstInvalidInput = input;
        }
      } else {
        input.classList.remove('invalid-input');
      }
    }
  
    if (firstInvalidInput) {
      firstInvalidInput.reportValidity(); // Display browser's default error alert for the first invalid input
      firstInvalidInput.focus(); // Set focus on the first invalid input
      return; // Stop form submission
    }
  
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
  
    // Perform password validation
    if (password !== confirmPassword) {
      passwordError.textContent = "Passwords do not match";
      passwordError.classList.add('error-animation');
      setTimeout(function () {
        passwordError.classList.remove('error-animation');
      }, 1000);
      return; // Stop form submission
    }
  
    // If all inputs are valid, proceed with form submission
    submitForm();
  }
  

function submitForm() {
    // Perform form submission logic here

    console.log("Form submitted successfully!");
    console.log("First Name:", firstNameInput.value);
    console.log("Last Name:", lastNameInput.value);
    console.log("Email:", emailInput.value);
    console.log("Phone:", phoneInput.value);
    console.log("Password:", passwordInput.value);
    console.log("Confirm Password:", confirmPasswordInput.value);


   document.getElementById("form").submit();

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
