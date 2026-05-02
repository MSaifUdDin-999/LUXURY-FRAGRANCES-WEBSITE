// JS Feature 1: Alert on page load
window.onload = () => {
    alert("Welcome to Luxury Scents!");
  };
  
  // JS Feature 2: Scroll to top on footer click
  document.querySelector("footer").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // JS Feature 3: Smooth scrolling for nav links
  document.querySelectorAll("nav a").forEach(a =>
    a.onclick = e => {
      e.preventDefault();
      document.querySelector(a.getAttribute("href"))
        ?.scrollIntoView({ behavior: "smooth" });
    });