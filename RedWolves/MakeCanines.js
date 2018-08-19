//Pain Point: Takes two button presses, instead of one to hide and show target information.

document.addEventListener("DOMContentLoaded", function (event) {
    
    var WolfButton = document.getElementById("Wolf");
    var RedWolfButton = document.getElementById("RedWolf");
    var CoyoteButton = document.getElementById("Coyote");
    

    var IsVisible = "notVisible";
    var VisibleContent = document.getElementById("PlaceContentHere");
    var BtnContent = null;



    //Assign Content to Buttons
    WolfButton.addEventListener("click", function (event) {
        VisibleContent.style.visibility = 'hidden';

        BtnContent = document.getElementById("WolfContent");
        BtnContent.style.visibility = 'visible';

        VisibleContent = BtnContent;
    });

    RedWolfButton.addEventListener("click", function (event) {

        VisibleContent.style.visibility = 'hidden';

        BtnContent = document.getElementById("RedWolfContent");
        BtnContent.style.visibility = 'visible';

        VisibleContent = BtnContent;
    });

    CoyoteButton.addEventListener("click", function (event) {

        VisibleContent.style.visibility = 'hidden';

        BtnContent = document.getElementById("CoyoteContent");
        BtnContent.style.visibility = 'visible';

        VisibleContent = BtnContent;
    }); 
});
