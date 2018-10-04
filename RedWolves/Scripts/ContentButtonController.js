"use strict"
//Hides and Shows content based on button press.

document.addEventListener("DOMContentLoaded", function (event) {

    //If defined BELOW button click assignment, recieve HideLanding is not a function
    //Works automatically ABOVE button click assignment.
    var HideLanding = function () {
        var LandingImage = document.getElementById("Landing");
        LandingImage.style.display = 'none';
    };

    var buttons = document.getElementsByClassName("Btn");
    var clicked = new Array();

    for (let i = 0; i < buttons.length; i++) {
        clicked[i] = buttons[i].id;     
        buttons[i].addEventListener('click', ShowHideElements(clicked[i]));
    }

    ///This part still does not function
    function ShowHideElements(buttonid) {
        var buttonIdString = buttonid + "";
        console.log(buttonIdString);
        var element;
        var element1tohide;
        var element2tohide;

        if (buttonIdString === 'Wolf') {
            element = document.getElementById('WolfContent');
            element1tohide = document.getElementById('RedWolfContent');
            element2tohide = document.getElementById('CoyoteContent');
        } else if (buttonIdString === 'RedWolf') {
            element = document.getElementById('RedWolfContent');
            element1tohide = document.getElementById('WolfContent');
            element2tohide = document.getElementById('CoyoteContent');
        } else if (buttonIdString === 'Coyote') {
            element = document.getElementById('CoyoteContent');
            element1tohide = document.getElementById('RedWolfContent');
            element2tohide = document.getElementById('WolfContent');
        }

       
        console.log(element + " " + element1tohide + " " + element2tohide);

        //at least this works
        HideLanding();

        element1tohide.style.display = 'none';
        element2tohide.style.display = 'none';

        if (element.classList.contains('hide')) {
            element.classList.remove('hide');
            element.style.visibility = 'visible';
            element.style.display = 'flex';
        } else {
            element.classList.add('hide');
            element.style.visibility = 'hidden';
        }
        console.log("classes: " + element.classList + " " + "display: " + element.style.display);
    }
 
});
