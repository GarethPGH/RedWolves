//if button is redwolves change inner html from hidden to visible

document.addEventListener("DOMContentLoaded", function (event) {
    
    var WolfButton = document.getElementById("Wolf");
    var RedWolfButton = document.getElementById("RedWolf");
    var CoyoteButton = document.getElementById("Coyote");
    

    var IsVisible = "notVisible";
    var VisibleContent = null;

    var AssignMe = function (Btn) {

        if (Btn === WolfButton && IsVisible === "Visible") {
            VisibleContent.style.visibility = 'visible';

        } else if (Btn === WolfButton && IsVisible === "notVisible") {
            VisibleContent.style.visibility = "hidden";

        } else if (Btn === RedWolfButton && IsVisible === "Visible") {
            VisibleContent.style.visibility = 'visible';

        } else if (Btn === RedWolfButton && IsVisible === "notVisible") {
            VisibleContent.style.visibility = "hidden";

        } else if (Btn === CoyoteButton && IsVisible === "Visible") {
            VisibleContent.style.visibility = 'visible';

        } else if (Btn === CoyoteButton && IsVisible === "notVisible") {
            VisibleContent.style.visibility = "hidden";

        } else {
            VisibleContent = "NotImplemented";
        }
    }

    WolfButton.addEventListener("click", function (event) {
        if (VisibleContent) { VisibleContent.style.visibility = "hidden"; } 
        VisibleContent = document.getElementById("WolfContent");
        if (IsVisible === "notVisible") {
            IsVisible = "Visible";
        } else {
            IsVisible = "notVisible";
        }
        AssignMe(WolfButton);
    });

    RedWolfButton.addEventListener("click", function (event) {
        if (VisibleContent) { VisibleContent.style.visibility = "hidden"; } 
        VisibleContent = document.getElementById("RedWolfContent");
        if (IsVisible === "notVisible") {
            IsVisible = "Visible";
        } else {
            IsVisible = "notVisible";
        }
        AssignMe(RedWolfButton);
    });

    CoyoteButton.addEventListener("click", function (event) {
        if (VisibleContent) { VisibleContent.style.visibility = "hidden"; } 
        VisibleContent = document.getElementById("CoyoteContent");
        if (IsVisible === "notVisible") {
            IsVisible = "Visible";
        } else {
            IsVisible = "notVisible";
        }
        AssignMe(CoyoteButton);
    }); 
});
