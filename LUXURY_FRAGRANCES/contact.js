// Feature 1: Form validation
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("❗ Please fill out all fields.");
      return false;
    }
  
    // Feature 2: Show Message after Submit
    document.getElementById("contactForm").classList.add("hidden");
    document.getElementById("thankYouMessage").classList.remove("hidden");
  
    return false; // Prevent page reload
  }
  
  