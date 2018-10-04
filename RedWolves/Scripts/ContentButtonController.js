"use strict"
//Hides and Shows content based on button press.

document.addEventListener("DOMContentLoaded", function (event) {

    //Works automatically now....
    var HideLanding = function () {
        var LandingImage = document.getElementById("Landing");
        LandingImage.style.display = 'none';
    };

        /*Still does not work, but shows this in the console
         * <button id="Wolf" class="Btn">
    ContentButtonController.js: 91: 9
    Wolf ContentButtonController.js: 98: 9
    [object HTMLDivElement][object HTMLDivElement][object HTMLDivElement]ContentButtonController.js: 117: 9
    classes: Content hide display: ContentButtonController.js: 134: 9
        < button id = "RedWolf" class="Btn" >
            ContentButtonController.js: 91: 9
    RedWolf ContentButtonController.js: 98: 9
    [object HTMLDivElement][object HTMLDivElement][object HTMLDivElement]ContentButtonController.js: 117: 9
    classes: Content hide display: none ContentButtonController.js: 134: 9
        < button id = "Coyote" class="Btn" >
            ContentButtonController.js: 91: 9
    Coyote ContentButtonController.js: 98: 9
    [object HTMLDivElement][object HTMLDivElement][object HTMLDivElement]ContentButtonController.js: 117: 9
    classes: Content hide display: none*/
  

    var buttons = document.getElementsByClassName("Btn");

    for (let i = 0; i < buttons.length; i++) {
        console.log(buttons[i]);
        var clicked = buttons[i].id;
        buttons[i].addEventListener('click', ShowHideElements(clicked));
    }

    function ShowHideElements(button) {
        var element = button;
        console.log(button);//why are you NULL!
        var element1tohide;
        var element2tohide;

        if (button === 'Wolf') {
            element = document.getElementById('WolfContent');
            element1tohide = document.getElementById('RedWolfContent');
            element2tohide = document.getElementById('CoyoteContent');
        } else if (button === 'RedWolf') {
            element = document.getElementById('RedWolfContent');
            element1tohide = document.getElementById('WolfContent');
            element2tohide = document.getElementById('CoyoteContent');
        } else if (button === 'Coyote') {
            element = document.getElementById('CoyoteContent');
            element1tohide = document.getElementById('RedWolfContent');
            element2tohide = document.getElementById('WolfContent');
        }

        //why is this null, undefined, undefined?
        console.log(element + " " + element1tohide + " " + element2tohide);

        //at least this works....automatically now... 
        HideLanding();

        //Undefined, therefore does not work
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
