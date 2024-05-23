// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6pVqxO00QpZ3iW9XUDpmo1OiBObCh2YY",
  authDomain: "lizer-bookings.firebaseapp.com",
  projectId: "lizer-bookings",
  storageBucket: "lizer-bookings.appspot.com",
  messagingSenderId: "785741031288",
  appId: "1:785741031288:web:d901cfce9081d0f2844a8d",
  measurementId: "G-TXYKHZZ9XX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//inputs
const nameInput = document.getElementById('name');


//submit button
const submit = document.getElementById('signup');
submit.addEventListener("click",function(event){
    
    event.preventDefault()

    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value; 
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Creating account...")
        // ...
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    });
})


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

})(jQuery);*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js"; // Correct import for auth

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6pVqxO00QpZ3iW9XUDpmo1OiBObCh2YY",
  authDomain: "lizer-bookings.firebaseapp.com",
  projectId: "lizer-bookings",
  storageBucket: "lizer-bookings.appspot.com",
  messagingSenderId: "785741031288",
  appId: "1:785741031288:web:d901cfce9081d0f2844a8d",
  measurementId: "G-TXYKHZZ9XX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize the auth instance

// Submit button
const submit = document.getElementById('signup');
submit.addEventListener("click", function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('pass').value;

  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    alert("Creating account...");
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
});

(function ($) {
  "use strict";

  // Validate and submit sign-in form
  function validateSignInForm() {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', function(event) {
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

  document.addEventListener('DOMContentLoaded', function() {
    validateSignInForm();
  });

  function validateSignUpForm() {
    const form = document.getElementById('register-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      // const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('pass').value;
      const rePassword = document.getElementById('re_pass').value;

      // if (name === "") {
      //   alert("Please enter your name.");
      //   return false;
      // }

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

  document.addEventListener('DOMContentLoaded', function() {
    validateSignUpForm();
  });

})(jQuery);
