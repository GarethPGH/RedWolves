document.addEventListener("DOMContentLoaded", function (event) {

    var menu = document.getElementById("References");
    var dropdown = document.getElementById("Dropdown");
    var forDropdown = document.getElementById("AnimateDropdown");

    document.addEventListener('mouseover', function (event) {

        if (menu === event.target) {
            forDropdown.onmouseover = function () {

                dropdown.style.display = 'flex';
            };
        } else {
            console.log('Menu does not exist');
        }
    });

    document.addEventListener('mouseout', function (event) {

        if (menu === event.target) {
            forDropdown.onmouseout = function () {

                dropdown.style.display = 'none';
            };
        } else {
            console.log('Menu does not exist');
        }
    });
});