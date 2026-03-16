const sideNav = document.getElementById("sideNav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

// Open navigation
openBtn.addEventListener("click", () => {
  sideNav.style.width = "250px";
});

// Close navigation
closeBtn.addEventListener("click", () => {
  sideNav.style.width = "0";
});
