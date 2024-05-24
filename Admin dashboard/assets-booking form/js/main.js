import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6p// Import the functions you need from the SDKs you needVqxO00QpZ3iW9XUDpmo1OiBObCh2YY",
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
const db = getFirestore(app);

// Listen for form submission
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("booking_name").value;
  const phone = document.getElementById("phone_number").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const info = document.getElementById("additional_information").value;

  // Validate input data
  if (!name || !phone || !date || !time) {
    alert("Please fill in all required fields.");
    return;
  }

  // Store booking in Firebase
  addDoc(collection(db, "appointments"), {
    name,
    phone,
    date,
    time,
    info,
  }).then(() => {
    alert("Booking successful!");
    // Clear form fields
    document.getElementById("booking_name").value = "";
    document.getElementById("phone_number").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("additional_information").value = "";
  });
});

$('.form-control').each(function () {
  floatedLabel($(this));
});

$('.form-control').on('input', function () {
  floatedLabel($(this));
});

function floatedLabel(input) {
  var $field = input.closest('.form-group');
  if (input.val()) {
    $field.addClass('input-not-empty');
  } else {
    $field.removeClass('input-not-empty');
  }
}
function copyLink() {
        const link = window.location.href;
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = link;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Link copied to clipboard!');
}