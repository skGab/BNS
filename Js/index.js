const contact = document.querySelector(".contactContainer");
const navContainer = document.querySelector(".home__navContainer");

// Open nav contact
contact.addEventListener("click", function () {
  navContainer.classList.add("display");

  contact.style.display = "none";
});

// Close nav
const closeButton = document.querySelector(".closeIcon");

closeButton.addEventListener("click", function () {
  navContainer.classList.remove("display");
  contact.style.display = "block";
});
