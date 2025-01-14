const openbtn = document.getElementById("open");
const closebtn = document.getElementById("close");
const nav = document.getElementById("nav");
const navd = document.getElementById("navd");
const home = document.getElementById("home");

openbtn.addEventListener("click", () => {
  openbtn.style.display = "none";
  nav.style.display = "flex";
});
closebtn.addEventListener("click", () => {
  openbtn.style.display = "flex";
  nav.style.display = "none";
});
