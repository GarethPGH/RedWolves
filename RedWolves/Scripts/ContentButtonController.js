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

    ///This part still does not function
    document.addEventListener('click', function ShowHideElements(event) {

        var element;
        var element1tohide;
        var element2tohide;
        console.log(event.target);

        //Gets correct button targets but some reason the if statement
        //automatically defaults to the else statement and element1tohide and element2tohide are undefined
        if (event.target.matches('Wolf')) {
            element = document.getElementById('WolfContent');
            element1tohide = document.getElementById('RedWolfContent');
            element2tohide = document.getElementById('CoyoteContent');
        } else if (event.target.matches('RedWolf')) {
            element = document.getElementById('RedWolfContent');
            element1tohide = document.getElementById('WolfContent');
            element2tohide = document.getElementById('CoyoteContent');
        } else if (event.target.matches('Coyote')) {
            element = document.getElementById('CoyoteContent');
            element1tohide = document.getElementById('RedWolfContent');
            element2tohide = document.getElementById('WolfContent');
        } else {
            console.log('wtf man?');
        }
        //at least this works
        HideLanding();

        element1tohide.style.display = 'none';
        element2tohide.style.display = 'none';

        if (element.hasChildNodes) {
            var eleChilds = element.childNodes;
        }
        if (element.display === 'none') {
            element.style.visibility = 'visible';
            element.style.display = 'flex';

            eleChilds.style.visibility = 'visible';
        }
    });
});
