// Function to save form data to sessionStorage
function saveFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const feedback = document.getElementById("feedback").value;
  const orderInfo = document.getElementById("order-info").value;
  const isOrder = document.getElementById("customer-order").checked;

  sessionStorage.setItem("contactName", name);
  sessionStorage.setItem("contactEmail", email);
  sessionStorage.setItem("contactPhone", phone);
  sessionStorage.setItem("contactFeedback", feedback);
  sessionStorage.setItem("contactOrderInfo", orderInfo);
  sessionStorage.setItem("contactIsOrder", isOrder);
}

// Function to load form data from sessionStorage
function loadFormData() {
  const name = sessionStorage.getItem("contactName") || "";
  const email = sessionStorage.getItem("contactEmail") || "";
  const phone = sessionStorage.getItem("contactPhone") || "";
  const feedback = sessionStorage.getItem("contactFeedback") || "";
  const orderInfo = sessionStorage.getItem("contactOrderInfo") || "";
  const isOrder = sessionStorage.getItem("contactIsOrder") === "true";

  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("phone").value = phone;
  document.getElementById("feedback").value = feedback;
  document.getElementById("order-info").value = orderInfo;
  document.getElementById("customer-order").checked = isOrder;
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  saveFormData();

  // Display a popup message
  alert("Form has been submitted!");
}

// Save form data before the page unloads
window.onbeforeunload = saveFormData;

// Load form data when the page loads
window.onload = loadFormData;

// Attach the handleSubmit function to the form's submit event
document
  .getElementById("contact-form")
  .addEventListener("submit", handleSubmit);
