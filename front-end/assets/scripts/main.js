// Get Elements
const menuContainer = document.querySelector('.header__group__links__list');

// Function to toggleClass
const toggleOpen = element => element.classList.toggle('is-open');

// Menu open/close
const menuToggle = () => toggleOpen(menuContainer);


// Range Value
var slider = document.getElementById("rangeValue");
var output = document.getElementById("price-range");
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}
