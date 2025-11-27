document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  let index = 0;

  function showSlide(i) {
    slidesContainer.style.transform = `translateX(-${i * 100}%)`;
  }

  next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  slidesContainer.style.width = `${slides.length * 100}%`;
});

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const refuseBtn = document.getElementById("refuse-cookies");


  if (localStorage.getItem("cookies-choice")) {
    banner.classList.add("hidden");
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookies-choice", "accepted");
    banner.classList.add("hidden");
    console.log("Cookies acceptés");
  });

  refuseBtn.addEventListener("click", () => {
    localStorage.setItem("cookies-choice", "refused");
    banner.classList.add("hidden");
    console.log("Cookies refusés");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const sideMenu = document.getElementById("side-menu");
  const closeMenu = document.getElementById("close-menu");
  const categoryLinks = document.querySelectorAll("#side-menu .category-list a");

  menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("open");
  });

  closeMenu.addEventListener("click", () => {
    sideMenu.classList.remove("open");
  });

  document.addEventListener("click", (e) => {
    if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      sideMenu.classList.remove("open");
    }
  });

  categoryLinks.forEach(link => {
    link.addEventListener("click", () => {
      sideMenu.classList.remove("open");
    });
  });
});

