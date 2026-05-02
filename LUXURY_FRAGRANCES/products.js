// Feature 1: Show/Hide Collection
function toggleCollection() {
    const collection = document.getElementById("productCollection");
    const button = document.getElementById("toggleButton");
  
    collection.classList.toggle("hidden");
  
    button.textContent = collection.classList.contains("hidden")
      ? "Show Collection"
      : "Hide Collection";
  }
  
  // Feature 2: Hover on First Product
  const firstProduct = document.querySelectorAll(".flex.flex-col")[0];
  const originalHeading = firstProduct.querySelector("h3").textContent;
  
  firstProduct.addEventListener("mouseenter", () => {
    firstProduct.querySelector("h3").textContent = "⭐ Featured";
  });
  firstProduct.addEventListener("mouseleave", () => {
    firstProduct.querySelector("h3").textContent = originalHeading;
  });
  
  // Feature 3: Toggle background on double-click
  document.body.addEventListener("dblclick", () => {
    document.body.classList.toggle("bg-gray-100");
  });

  function toggleCollection() {
    const collection = document.getElementById('productCollection');
    const btn = document.getElementById('toggleButton');

    if (collection.style.display === "none") {
        collection.style.display = "flex";
        btn.innerText = "Hide Collection";
    } else {
        collection.style.display = "none";
        btn.innerText = "Show Collection";
    }
}
  