// 🔍 SEARCH FUNCTIONALITY
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const resultDiv = document.getElementById("result");
  const grids = document.querySelectorAll(".singer-grid");

  // Clear previous results
  resultDiv.innerHTML = "";

  // If no input, show original grid
  if (!value) {
    grids.forEach(grid => (grid.style.display = "grid"));
    return;
  }

  // Otherwise, hide all and show matching singers
  grids.forEach(grid => {
    grid.style.display = "none";
    grid.querySelectorAll(".singer").forEach(singer => {
      if (singer.textContent.toLowerCase().includes(value)) {
        resultDiv.appendChild(singer.cloneNode(true));
      }
    });
  });
});

// 📱 TOGGLE MENU IN MOBILE VIEW
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

// 🎨 CHANGE BACKGROUND COLOR (Optional / Bonus)
function changeColor() {
  const colors = [
    "red", "blue", "green", "orange", "purple", "black",
    "aqua", "gray", "pink", "yellow", "burlywood", "darkred"
  ];
  let random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];
}
