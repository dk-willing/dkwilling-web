const contactElement = document.querySelectorAll("#contact");
const contactModal = document.querySelector("#ContactModal");
const contactModalOverlay = document.querySelector(".overlay");
const contactModalCloseBtn = document.querySelectorAll(".fa-xmark");
const contactModalForm = document.querySelector(".contact__modal-form");
const successMessage = document.querySelector(".success");

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
  e.preventDefault();
  contactModalForm.classList.add("hidden");
  successMessage.classList.remove("hidden");
});
