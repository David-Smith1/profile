const dropdownButton = document.querySelector(".extender a")
const dropdown = document.querySelector(".navigation-extendable")

dropdownButton.addEventListener("click", (event) => {
    event.preventDefault();
    dropdown.classList.toggle("navigation-extendable-2");
    (dropdown.classList.contains("navigation-extendable-2")) ? dropdownButton.style.color = "white" : dropdownButton.style.color = null;

});

