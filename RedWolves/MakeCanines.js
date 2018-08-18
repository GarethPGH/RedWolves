//Pain Point: Takes two button presses, instead of one to hide and show target information.

document.addEventListener("DOMContentLoaded", function (event) {
    
    var WolfButton = document.getElementById("Wolf");
    var RedWolfButton = document.getElementById("RedWolf");
    var CoyoteButton = document.getElementById("Coyote");
    

    var IsVisible = "notVisible";
    var VisibleContent = null;

    //Toggle Visibility
    var ToggleIsVisible = function (Btn) {
        if (IsVisible === "notVisible") {
            IsVisible = "Visible";
        } else {
            IsVisible = "notVisible";
            VisibleContent.style.visibility = "hidden";

        }

    }

    //Assign Content to Buttons
    WolfButton.addEventListener("click", function (event) {

        VisibleContent = document.getElementById("WolfContent");
        VisibleContent.style.visibility = 'visible';

        ToggleIsVisible(WolfButton);
    });

    RedWolfButton.addEventListener("click", function (event) {

        VisibleContent = document.getElementById("RedWolfContent");
        VisibleContent.style.visibility = 'visible';

        ToggleIsVisible(RedWolfButton);
    });

    CoyoteButton.addEventListener("click", function (event) {

        VisibleContent = document.getElementById("CoyoteContent");
        VisibleContent.style.visibility = 'visible';

        AssignMe(CoyoteButton);
    }); 
});
