document.addEventListener("DOMContentLoaded", function (event) {

    var menu = document.getElementById("Dropdown");
    console.log("onmouseover event not fired, " + menu);
    var forDropdown = document.getElementById("References");

    document.addEventListener('onmouseover', function () {
        //these arent happening
        forDropdown.onmouseover = function () {
            console.log("onmouseover event fired");
            menu.style.display = 'flex';
        };
    });

    document.addEventListener('onmouseout', function () {

        forDropdown.onmouseout = function () {
            console.log("element disappeared?");
            menu.style.display = "none";
        };
    });
  
});