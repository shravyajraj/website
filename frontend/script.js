// script.js
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}

function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
window.addEventListener("load", () => {
  document.getElementById("loader").classList.add("hidden");
});
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("hidden");
});
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 500); // Show loader only for 0.5 seconds max
});
