const dropdownButton = document.querySelector(".extender a")
const dropdown = document.querySelector(".navigation-extendable")

dropdownButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (dropdown.style.height = 150); {
        dropdown.style.height = 0;
    } else {
        dropdown.style.height = 150;
    }
});
