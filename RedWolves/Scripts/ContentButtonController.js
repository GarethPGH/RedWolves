"use strict"
//Hides and Shows content based on button press.

document.addEventListener("DOMContentLoaded", function (event) {
    //Behaves as expected, however, does not show child content.

    var WolfButton = document.getElementById("Wolf");
    var RedWolfButton = document.getElementById("RedWolf");
    var CoyoteButton = document.getElementById("Coyote");

    

    var HideLanding = function () {
        var LandingImage = document.getElementById("Landing");
        LandingImage.style.display = 'none';
    };

    //    var Info = document.getElementsByClassName('Content');
    //    for (let i = 0; i < Info.length; i++) {
    //        Info[i].classList.add('hide');
    //    }

    //    console.log(Cont);

    //    Cont.style.visibility = 'visible';
    
    //    if (Cont.className === 'hide') {
    //        Cont.className.remove('hide');
    //    } else {
    //        Cont.className.add('hide');
    //    }
    //};


    WolfButton.addEventListener("click", function (event) {
        HideLanding();

        var element = document.getElementById('WolfContent');
        var element1tohide = document.getElementById('RedWolfContent');
        var element2tohide = document.getElementById('CoyoteContent');

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
    });

    RedWolfButton.addEventListener("click", function (event) {
        HideLanding();

        var element = document.getElementById('RedWolfContent');
        var element1tohide = document.getElementById('WolfContent');
        var element2tohide = document.getElementById('CoyoteContent');

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
    });

    CoyoteButton.addEventListener("click", function (event) {
        HideLanding();

        var element = document.getElementById('CoyoteContent');
        var element1tohide = document.getElementById('RedWolfContent');
        var element2tohide = document.getElementById('WolfContent');

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
    }); 
 
});
