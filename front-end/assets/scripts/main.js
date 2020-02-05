// Get Elements
const menuContainer = document.querySelector('.header__group__links__list');

// Function to toggleClass
const toggleOpen = element => element.classList.toggle('is-open');

// Menu open/close
const menuToggle = () => toggleOpen(menuContainer);