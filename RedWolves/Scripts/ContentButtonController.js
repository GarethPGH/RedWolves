"use strict"
//Hides and Shows content based on button press.

document.addEventListener("DOMContentLoaded", function (event) {

    //still works automatically
    var HideLanding = function () {
        var LandingImage = document.getElementById("Landing");
        LandingImage.style.display = 'none';
    };

    var buttons = document.getElementsByClassName("Btn");
    var clicked = new Array();

    ///This is working, but wierdly. You have to click on one button to trigger HideLanding();
    //Then you must click on a DIFFERENT button to start toggling content. 
    //Not sure what to do here, perhaps use a different event listener for Landing such that if you click anywhere on Landing
    //It hides it and have redwolf default to shown on page.

    document.addEventListener('click', function ShowHideElements(event) {
        var button = event.target.id;
        var element;
        var element1tohide;
        var element2tohide;

        console.log(button);

        switch (button) {
            case 'Wolf':
                element = document.getElementById('WolfContent');
                element1tohide = document.getElementById('RedWolfContent');
                element2tohide = document.getElementById('CoyoteContent');
                console.log(element + " " + element1tohide + " " + element2tohide);
                break;
            case 'RedWolf':
                element = document.getElementById('RedWolfContent');
                element1tohide = document.getElementById('WolfContent');
                element2tohide = document.getElementById('CoyoteContent');
                console.log(element + " " + element1tohide + " " + element2tohide);
                break;
            case 'Coyote':
                element = document.getElementById('CoyoteContent');
                element1tohide = document.getElementById('RedWolfContent');
                element2tohide = document.getElementById('WolfContent');
                console.log(element + " " + element1tohide + " " + element2tohide);
                break;
            default:
                console.log("Wtf Man");
                console.log(element + " " + element1tohide + " " + element2tohide);
        }           

        HideLanding();
        element1tohide.style.display = 'none';
        element2tohide.style.display = 'none';

        if (element.hasChildNodes) {
            var eleChilds = element.childNodes;
        }
        if (element.style.display === 'none') {

            element.style.display = 'flex';
            element.style.visibility = 'visible';
            eleChilds.style.display = 'flex';
            eleChilds.style.visibility = 'visible';
        }
    });
});
