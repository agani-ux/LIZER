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