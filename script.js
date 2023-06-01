const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');


firstNameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evita el comportamiento predeterminado (recargar la página)
      lastNameInput.focus(); // Enfoca el siguiente campo de entrada
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
    

  });


document.addEventListener("DOMContentLoaded", function() {
    var i = 0;
    var tag = document.getElementById("typeWritter");
    var html = document.getElementById("typeWritter").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 170;

    function typeWriter() {
        if (i <= txt.length) {
            document.getElementById("typeWritter").innerHTML = txt.slice(0 , i + 1);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    
    typeWriter();
});