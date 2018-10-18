"use strict";
//Hides and Shows content based on button press.

document.addEventListener("DOMContentLoaded", function (event) {

    document.addEventListener('click', function ShowHideElements(event) {
        var button = event.target.id;
        var element = "";
        var element1tohide = "";
        var element2tohide = "";
        var landingclick = false;

        switch (button) {
            case 'Wolf':
                element = document.getElementById('WolfContent');
                element1tohide = document.getElementById('RedWolfContent');
                element2tohide = document.getElementById('CoyoteContent');
                landingclick = true;
                break;
            case 'RedWolf':
                element = document.getElementById('RedWolfContent');
                element1tohide = document.getElementById('WolfContent');
                element2tohide = document.getElementById('CoyoteContent');
                landingclick = true;
                break;
            case 'Coyote':
                element = document.getElementById('CoyoteContent');
                element1tohide = document.getElementById('RedWolfContent');
                element2tohide = document.getElementById('WolfContent');
                landingclick = true;
                break;
            default:
                console.log("Buttons not clicked, element(s) not assigned.");
        }

        if (element1tohide && element2tohide) {
            element1tohide.style.display = 'none';
            element2tohide.style.display = 'none';
        }

        if (element) {
            element.style.display = 'flex';
            element.style.visibility = 'visible';
        }

        if (landingclick === true) {
            var LandingImage = document.getElementById("Landing");
            LandingImage.style.display = 'none';
        }
    });
});
