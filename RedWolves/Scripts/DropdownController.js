document.addEventListener("DOMContentLoaded", function (event) {

    var menu = document.getElementById("Dropdown");
    console.log("onmouseover event not fired, " + menu);
    var forDropdown = document.getElementById("AnimateDropdown");

    document.addEventListener('mouseover', function () {
        //these arent happening
        if (menu) {
            forDropdown.onmouseover = function (menu) {
                console.log("onmouseover event fired");
                menu.style.display = 'flex';
            };
        } else {
            console.log('Menu does not exist');
        }
    });

    document.addEventListener('mouseout', function () {

        if (menu) {
        forDropdown.onmouseout = function (menu) {
            console.log("element disappeared?");
            menu.style.display = 'none';
        };
        } else {
            console.log('Menu does not exist');
        }
    });
  
});