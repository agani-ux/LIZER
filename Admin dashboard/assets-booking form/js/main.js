// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
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
  
    // Set database variable
var database = firebase.database()

function save() {
  ( booking_name, phone_number, date, time, additional_information )
  var booking_name = document.getElementById('booking_name').value
  var phone_number = document.getElementById('phone_number').value
  var date = document.getElementById('date').value
  var time = document.getElementById('time').value
  var additional_information = document.getElementById('additionanl_information').value

  database.ref('appointments/' + username).set({
    name:booking_name,
    number:phone_number,
    date:date,
    time:time,
    info:additional_information

  })

  alert('Saved')
}