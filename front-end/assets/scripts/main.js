// Get Elements
const menuContainer = document.querySelector('.header__group__links__list');

// Function to toggleClass
const toggleOpen = element => {
    event.preventDefault();
    return element.classList.toggle('is-open');
}

// Function to remove CSS class
const toggleClose = element => {
    event.target === element ? element.classList.remove('is-open') : false;
}

// Menu open/close
const menuToggle = () => toggleOpen(menuContainer);

// Modal toggle
const modalContainer = document.querySelector('.modal__search');
const modalToggle = () =>toggleOpen(modalContainer);

window.onclick = event => {
    toggleClose(modalContainer);
}


// Range Value
var slider = document.getElementById("rangeValue");
var output = document.getElementById("price-range");
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}
