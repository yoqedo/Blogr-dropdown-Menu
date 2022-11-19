
const btn = document.querySelector('.dropd-btn1');
const btn2 = document.querySelector('.dropd-btn2');
const btn3 = document.querySelector('.dropd-btn3');
const hamIcon = document.querySelector('.hamburger-icon');
const navMenu = document.querySelector('.navbar-menu');

const dropdownIcon1 = document.querySelector('.icon-light-1');
const dropdownIcon2 = document.querySelector('.icon-light-2');
const dropdownIcon3 = document.querySelector('.icon-light-3');
const dropdownIcondark1 = document.querySelector('.icon-dark-1');
const dropdownIcondark2 = document.querySelector('.icon-dark-2');
const dropdownIcondark3 = document.querySelector('.icon-dark-3');

const dropDownOne = document.querySelector('.dropdown-content1');
const dropDownTwo = document.querySelector('.dropdown-content2');
const dropDownThree = document.querySelector('.dropdown-content3');

// for practice Purpose, if else statements instead of toggle
// Function for Button 1
btn.addEventListener('click', function () {
    if (dropDownOne.classList.contains('show-dd1'), dropdownIcon1.classList.contains('icon-light-active'), dropdownIcondark1.classList.contains('icon-light-active')) {
        dropDownOne.classList.remove('show-dd1');
        dropdownIcon1.classList.remove('icon-light-active');
        dropdownIcondark1.classList.remove('icon-light-active')
    }
    else {
        dropDownOne.classList.add('show-dd1');
        dropdownIcon1.classList.add('icon-light-active');
        dropdownIcondark1.classList.add('icon-light-active')
    }
})

// Function for Dropdown Button 2
btn2.addEventListener('click', function () {
    if (dropDownTwo.classList.contains('show-dd1'), dropdownIcon2.classList.contains('icon-light-active'), dropdownIcondark2.classList.contains('icon-light-active')) {
        dropDownTwo.classList.remove('show-dd1');
        dropdownIcon2.classList.remove('icon-light-active');
        dropdownIcondark2.classList.remove('icon-light-active')
    }
    else {
        dropDownTwo.classList.add('show-dd1');
        dropdownIcon2.classList.add('icon-light-active');
        dropdownIcondark2.classList.add('icon-light-active')
    }
})

// Function for Dropdown Button 3
btn3.addEventListener('click', function () {
    if (dropDownThree.classList.contains('show-dd1'), dropdownIcon3.classList.contains('icon-light-active'), dropdownIcondark3.classList.contains('icon-light-active')) {
        dropDownThree.classList.remove('show-dd1');
        dropdownIcon3.classList.remove('icon-light-active');
        dropdownIcondark3.classList.remove('icon-light-active')
    }
    else {
        dropDownThree.classList.add('show-dd1');
        dropdownIcon3.classList.add('icon-light-active');
        dropdownIcondark3.classList.add('icon-light-active')
    }
})

// Example with toggle Function
// Function for Shwo Navmenu on pressing Menuicon
hamIcon.addEventListener('click', function () {
    navMenu.classList.toggle('show-navmenu');
    hamIcon.classList.toggle('hamburger-menu-rotate')
})