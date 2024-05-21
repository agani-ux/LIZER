(function ($) {
    "use strict";

    // Validate and submit sign-in form
 function validateSignInForm() {
        const form = document.getElementById('login-form');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('your_name').value;
            const password = document.getElementById('your_pass').value;

            if (username === "") {
                alert("Please enter your name.");
                return false;
            }

            if (password === "") {
                alert("Please enter your password.");
                return false;
            }

            // Submit form via AJAX or any desired method
            alert("Form submitted successfully!");

            window.location.href = 'Admin dashboard/html/admin-dashboard.html';
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        validateSignInForm();
    });
    
        function validateSignUpForm() {
            const form = document.getElementById('register-form');
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('pass').value;
                const rePassword = document.getElementById('re_pass').value;
    
                if (name === "") {
                    alert("Please enter your name.");
                    return false;
                }
    
                if (email === "") {
                    alert("Please enter your email.");
                    return false;
                }
    
                if (password === "") {
                    alert("Please enter your password.");
                    return false;
                }
    
                if (rePassword === "") {
                    alert("Please repeat your password.");
                    return false;
                }
    
                if (password !== rePassword) {
                    alert("Passwords do not match.");
                    return false;
                }
    
                // Submit form via AJAX or any desired method
                window.location.href = 'form-wizard.html'; // Redirect to form wizard
            });
        }
    
        document.addEventListener('DOMContentLoaded', function () {
            validateSignUpForm();
        });

})(jQuery);
