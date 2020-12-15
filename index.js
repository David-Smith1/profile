const dropdownButton = document.querySelector(".extender a")
const dropdown = document.querySelector(".navigation-extendable")

dropdownButton.addEventListener("click", (event) => {
  dropdown.style.height = 150;
});
