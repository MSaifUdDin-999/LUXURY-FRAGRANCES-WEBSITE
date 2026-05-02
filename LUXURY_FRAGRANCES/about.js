// Feature 1: Toggle additional info
function toggleInfo() {
    document.getElementById("extraInfo").classList.toggle("hidden");
  }
  
  // Feature 2 & 3 inside DOMContentLoaded to ensure elements are ready
  window.addEventListener("DOMContentLoaded", () => {
    const aboutTitle = document.getElementById("aboutUsTitle");
    const dblClickArea = document.getElementById("dblclick");
  
    // Feature 2: Change text color on hover
    aboutTitle.addEventListener("mouseenter", function () {
      this.style.color = "blue";
    });
  
    aboutTitle.addEventListener("mouseleave", function () {
      this.style.color = "";
    });
  
    // ✅ Feature 3: Toggle background of the section on double-click
    dblClickArea.addEventListener("dblclick", () => {
      dblClickArea.classList.toggle("bg-[#6a7989]");
    });
  });  