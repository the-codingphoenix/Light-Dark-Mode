const toggleSwitch = document.querySelector('input[type="checkbox"]'); //selecting the input type checkbox from html
const nav = document.getElementById('nav');
const menuIcon = document.getElementById('menu-icon');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const darkTheme = 'dark';
const lightTheme = 'light';
// const textBox = document.getElementById('text-box');

// dark mode styles
// function darkMode() {
//     nav.style.backgroundColor = 'rgb(18 18 18 / 50%)';
//     // textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     toggleIcon.children[0].textContent = 'Dark Mode';
//     toggleIcon.children[1].classList.remove('fa-sun');
//     toggleIcon.children[1].classList.add('fa-moon');
//     image1.src = './images/undraw_proud_coder_dark.svg';
//     image2.src = './images/undraw_feeling_proud_dark.svg';
//     image3.src = './images/undraw_conceptual_idea_dark.svg';
// }

// light mode styles
// function lightMode() {
//     nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     // textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     toggleIcon.children[0].textContent = 'Light Mode';
//     toggleIcon.children[1].classList.remove('fa-moon');
//     toggleIcon.children[1].classList.add('fa-sun');
//     image1.src = './images/undraw_proud_coder_light.svg';
//     image2.src = './images/undraw_feeling_proud_light.svg';
//     image3.src = './images/undraw_conceptual_idea_light.svg';
// }

//change theme dynamically
// function changeTheme(event) {
//     if(event.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         darkMode();
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         lightMode();
//     }
// }

//refracted code without repetition
// Function to update the mode styles and images
function changeMode(isDark) {
    // Update the background color of the navigation bar
    nav.style.backgroundColor = isDark ? 'rgb(18 18 18 / 50%)' : 'rgb(255 255 255 / 50%)';
    //update menu icon color
    menuIcon.style.color = isDark ? 'rgb(255 255 255 / 50%)': 'rgb(18 18 18 / 50%)' ;
    // Update the toggle icon text and icon class
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    toggleIcon.children[1].classList.remove(isDark ? 'fa-sun' : 'fa-moon');
    toggleIcon.children[1].classList.add(isDark ? 'fa-moon' : 'fa-sun');

    // Determine the mode (dark or light) and update image sources
    const mode = isDark ? darkTheme : lightTheme;
    image1.src = `./images/undraw_proud_coder_${mode}.svg`;
    image2.src = `./images/undraw_feeling_proud_${mode}.svg`;
    image3.src = `./images/undraw_conceptual_idea_${mode}.svg`;
}

// Function to change the theme dynamically
function changeTheme(event) {
    const isDark = event.target.checked;
    
    // Set the data-theme attribute on the document element
    document.documentElement.setAttribute('data-theme', isDark ? darkTheme : lightTheme);
    
    // Update the mode styles and images
    changeMode(isDark);
    // Save the theme choice to local storage
    localStorage.setItem('theme', isDark ? darkTheme : lightTheme);
}

//Event Listener
toggleSwitch.addEventListener('change', changeTheme);

// Check local storage for theme preference and apply it
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Set the checkbox state based on the saved theme
    toggleSwitch.checked = currentTheme === darkTheme;
    
    // Update the mode styles and images
    changeMode(currentTheme === darkTheme);
} else {
    // If no theme is saved in local storage, default to light mode
    document.documentElement.setAttribute('data-theme', lightTheme);
    changeMode(false);
}