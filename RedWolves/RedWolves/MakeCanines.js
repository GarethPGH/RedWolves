//if button is redwolves change inner html from hidden to visible

window.onload = function () {

    var AssignMe = function (event) {

        var VisibleContent;

        if (Button1) {
            VisibleContent = document.getElementById("Content0");
            VisibleContent.children.setAttribute('hidden', 'visible');

        } else if (Button2) {
            VisibleContent = document.getElementById("Content1");
            VisibleContent.children.setAttribute('hidden', 'visible');

        } else if (Button3) {
            VisibleContent = document.getElementById("Content2");
            VisibleContent.children.setAttribute('hidden', 'visible');

        }
    }

    var Button1 = document.getElementById("Wolf").addEventListener("click", AssignMe);
    var Button2 = document.getElementById("RedWolf").addEventListener("click", AssignMe);
    var Button3 = document.getElementById("Coyote").addEventListener("click", AssignMe);
}