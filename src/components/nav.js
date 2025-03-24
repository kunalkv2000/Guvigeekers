// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.style.height = mobileMenu.scrollHeight + "px"; // Set height for transition
    } else {
        mobileMenu.style.height = "0";
    }
});

// Toggle mobile services dropdown
const servicesDropdownToggle = document.getElementById('services-dropdown-toggle');
const servicesDropdown = document.getElementById('services-dropdown');

servicesDropdownToggle.addEventListener('click', () => {
    servicesDropdown.classList.toggle('hidden');
});