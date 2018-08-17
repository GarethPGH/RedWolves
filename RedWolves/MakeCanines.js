//if button is redwolves change inner html from hidden to visible

document.addEventListener("DOMContentLoaded", function (event) {
    var WolfButton = document.getElementById("Wolf");
    var RedWolfButton = document.getElementById("RedWolf");
    var CoyoteButton = document.getElementById("Coyote");

    var IsBtnClicked = "notClicked";

    var AssignMe = function (Btn) {

        var VisibleContent;
        //
        if (Btn === WolfButton && IsBtnClicked === "clicked") {
            VisibleContent = document.getElementById("WolfContent");
            VisibleContent.style.visibility = 'visible';

        } else if (Btn === RedWolfButton && IsBtnClicked === "clicked") {
            VisibleContent = document.getElementById("RedWolfContent");
            VisibleContent.style.visibility = 'visible';

        } else if (Btn === CoyoteButton && IsBtnClicked === "clicked") {
            VisibleContent = document.getElementById("CoyoteContent");
            VisibleContent.style.visibility = 'visible';

        } else {
            VisibleContent = "nothing";
        }
    }

    WolfButton.addEventListener("click", function (event) {
        IsBtnClicked = "clicked";
        AssignMe(WolfButton);
    });
    RedWolfButton.addEventListener("click", function (evemt) {
        IsBtnClicked = "clicked";
        AssignMe(RedWolfButton);
    });
    CoyoteButton.addEventListener("click", function (event) {
        IsBtnClicked = "clicked";
        AssignMe(CoyoteButton);
    });
});