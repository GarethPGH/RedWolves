"use strict"
//Hides and Shows content based on button press.

document.addEventListener("DOMContentLoaded", function (event) {
    //Behaves as expected, however, does not show child content.

    var WolfButton = document.getElementById("Wolf");
    var RedWolfButton = document.getElementById("RedWolf");
    var CoyoteButton = document.getElementById("Coyote");

    function HideContent() {

        var pages = document.getElementsByClassName('Content');

        for (var i = 0; i < pages.length; i++) {
            if (pages[i].style.display === 'flex') {
                pages[i].classList.add('hide');
            }
        }
    }

    function ShowContent(Info) {
        console.log(Info);
        Info.style.display = 'flex';
        //toggles class list, but the added class don't really DO anything they are supposed to.
        if (Info.classList.contains('hide')) {
            Info.classList.remove('hide');
            Info.classList.add('show');
        } else {
            Info.classList.remove('show');
            Info.classList.add('hide');
        }
        //var hasChildren = Info.hasChildNodes;

        //if (hasChildren) {
        //    Info.childNodes.style.display = 'flex';
        //    Info.childNodes.style.visibility = 'visible';
        //}
    }

    function HideLanding() {
        var LandingImage = document.getElementById("Landing");
        LandingImage.style.display = 'none';
    }
    
    WolfButton.addEventListener("click", function (event) {

       // HideContent();
        HideLanding();

        var element = document.getElementById('WolfContent');
        ShowContent(element);
        
    });

    RedWolfButton.addEventListener("click", function (event) {

       // HideContent();
        HideLanding();

        var element = document.getElementById('RedWolfContent');
        ShowContent(element);
      
    });

    CoyoteButton.addEventListener("click", function (event) {

       // HideContent();
        HideLanding();

        var element = document.getElementById('CoyoteContent');
        ShowContent(element);
       
    }); 
 
});
