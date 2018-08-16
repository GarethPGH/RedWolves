//if button is redwolves change inner html from hidden to visible

document.addEventListener("DOMContentLoaded", function (event) {
    var Button1 = document.getElementById("Wolf");
    var Button2 = document.getElementById("RedWolf");
    var Button3 = document.getElementById("Coyote");


    var AssignMe = function (event) {

        var VisibleContent;

        if (Button1) {
            VisibleContent = document.getElementById("Content0");
            VisibleContent.style.visibility = 'visible';

        } else if (Button2) {
            VisibleContent = document.getElementById("Content1");
            VisibleContent.style.visibility = 'visible';

        } else if (Button3) {
            VisibleContent = document.getElementById("Content2");
            VisibleContent.style.visibility = 'visible';

        }
    }

    Button1.addEventListener("click", AssignMe);
    Button2.addEventListener("click", AssignMe);
    Button3.addEventListener("click", AssignMe);
});