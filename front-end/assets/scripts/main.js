// Get Elements
const menuContainer = document.querySelector('.header__group__links__list');

// Open / Close class
const toggleOpen = element => {
    event.preventDefault();
    return element.classList.toggle('is-open');
}

// Close class
const closeElement = element => element.classList.remove('is-open');

// Menu open/close
const menuToggle = () => toggleOpen(menuContainer);

// Modal toggle
const modalContainer = document.querySelector('.modal__search');
const modalToggle = () =>toggleOpen(modalContainer);

// Global click
window.onclick = event => {
    event.target === modalContainer
        ? closeElement(modalContainer, event)
        : false;
};

// Global ESC key
window.onkeydown = e => {
    e.keyCode === 27
        ? closeElement(modalContainer)
        : false;
};

// Range Value
var slider = document.getElementById("rangeValue");
var output = document.getElementById("price-range");
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}
