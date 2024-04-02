let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (currentScrollPos === 0) {
    navbar.style.top = "0"; // Menampilkan navbar saat berada di paling atas
  } else {
    navbar.style.top = "-70px"; // Menyembunyikan navbar saat tidak berada di paling atas
  }

  prevScrollPos = currentScrollPos;
}