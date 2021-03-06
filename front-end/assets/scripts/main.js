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
const modalToggle = () => toggleOpen(modalContainer);

// Close OnClick
const closeOnClick = element => 
    event.target === element ? closeElement(modalContainer, event) : false;

// Global click
window.onclick = event => {
    closeOnClick(modalContainer);
    closeOnClick(menuContainer);
};

// Global ESC key
window.onkeydown = e => {
    if (e.keyCode === 27) {
        closeElement(modalContainer);
        closeElement(menuContainer);
    }
};

// Filter Cards
const container = [...document.querySelectorAll('.content__menu ul li a')];
const changeTabs = () => {
    event.preventDefault();
    container.map(item => {
        return item.classList.remove('selected');
    });
    event.target.classList.add('selected');
}
const changeFilter = e => {
    changeTabs();
}


// Range Value
var slider = document.getElementById("rangeValue");
var output = document.getElementById("price-range");
output.innerHTML = slider.value;
slider.oninput = () => output.innerHTML = slider.value;