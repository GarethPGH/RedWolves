"use strict"
//Hides and Shows content based on button press.

document.addEventListener("DOMContentLoaded", function (event) {
    //Behaves as expected, however, does not show child content.

    var WolfButton = document.getElementById("Wolf");
    var RedWolfButton = document.getElementById("RedWolf");
    var CoyoteButton = document.getElementById("Coyote");

    function HideLanding() {
        var LandingImage = document.getElementById("Landing");
        LandingImage.style.display = 'none';
    }

    function HideAllContent() {
        var Info = document.getElementsByClassName('Content');
        for (let i = 0; i < Info.length; i++) {
            Info[i].classList.add('hide');

        }
    }

    function ShowHideContent(Cont) {

        console.log(Cont);

        Cont.style.visibility = 'visible';

        if (Cont.className === 'hide') {
            Cont.className = 'show';
        } else {
            Cont.className = 'hide';
        }
    }

    WolfButton.addEventListener("click", function (event) {
        var element = document.getElementById('WolfContent');
        ShowHideContent(element);
    });

    RedWolfButton.addEventListener("click", function (event) {
        var element = document.getElementById('RedWolfContent');
        ShowHideContent(element);
    });

    CoyoteButton.addEventListener("click", function (event) {
        var element = document.getElementById('CoyoteContent');
        ShowHideContent(element);
    }); 
 
});
