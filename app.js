const contactElement = document.querySelectorAll("#contact");
const contactModal = document.querySelector("#ContactModal");
const contactModalOverlay = document.querySelector(".overlay");
const contactModalCloseBtn = document.querySelectorAll(".fa-xmark");
const contactModalForm = document.querySelector(".contact__modal-form");
const successMessage = document.querySelector(".success");

// Get all navlinks anchor tags
const allNavLinks = document.querySelectorAll(".nav__list a");
const allSections = document.querySelectorAll("main section");
const mobileNav = document.querySelector(".mobile-nav");

// Function to remove all active links
const removeActiveLinks = () => {
  allNavLinks.forEach((link) => {
    link.classList.remove("active-section");
  });
};

const navbar = document.querySelector(".header__nav");

// Listening to scroll effect on the windows
window.addEventListener("scroll", () => {
  if (scrollY) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

contactElement.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    contactModal.style.display = "block";
  });
});

contactModalOverlay.addEventListener("click", () => {
  contactModal.style.display = "none";
});
contactModalCloseBtn.forEach((xMark) =>
  xMark.addEventListener("click", () => {
    contactModal.style.display = "none";
  })
);
contactModalForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  contactModalForm.classList.add("hidden");
  successMessage.classList.remove("hidden");
});

// Navlinks acnhors
allNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    removeActiveLinks();
    link.classList.add("active-section");
  });
});

// Animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.2 }
);
const animatedSection = document.querySelectorAll(".animated-section--1");
animatedSection.forEach((section) => observer.observe(section));

// Observer 2
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.2 }
);

const fadeElements = document.querySelectorAll(".fade");
fadeElements.forEach((el) => {
  fadeObserver.observe(el);
});

mobileNav.addEventListener("click", () => {
  document.querySelector(".header-nav").classList.toggle("open");

  if (document.querySelector(".header-nav").classList.contains("open")) {
    mobileNav.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    mobileNav.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }

  allNavLinks.forEach((link) =>
    link.addEventListener("click", () => {
      if (document.querySelector(".header-nav").classList.contains("open")) {
        document.querySelector(".header-nav").classList.remove("open");
        mobileNav.innerHTML = `<i class="fa-solid fa-bars"></i>`;
      }
    })
  );
});

// Light and Dark Mode
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeBtn.innerHTML = `<i class="ri-moon-line"></i>`;
  } else {
    themeBtn.innerHTML = `<i class="ri-sun-line"></i>`;
  }

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("my-Theme", "light");
  } else {
    localStorage.setItem("my-Theme", "dark");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("my-Theme") === "light") {
    document.body.classList.add("light-mode");
  } else if (localStorage.getItem("my-Theme") === "dark") {
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }
});
