//Hides and Shows content based on button press.

//Add "landing page" content so default content will show on loaded page before button press
document.addEventListener("DOMContentLoaded", function (event) {
    
    var WolfButton = document.getElementById("Wolf");
    var RedWolfButton = document.getElementById("RedWolf");
    var CoyoteButton = document.getElementById("Coyote");
    
    var VisibleContent;
    var BtnContent = null;
    
    WolfButton.addEventListener("click", function (event) {

        if (VisibleContent) { VisibleContent.style.display = 'none'; }

        BtnContent = document.getElementById("WolfContent");
        BtnContent.style.display = 'flex';
        BtnContent.style.visibility = 'visible';

        VisibleContent = BtnContent;
    });

    RedWolfButton.addEventListener("click", function (event) {

        if (VisibleContent) { VisibleContent.style.display = 'none'; }

        BtnContent = document.getElementById("RedWolfContent");
        BtnContent.style.display = 'flex';
        BtnContent.style.visibility = 'visible';

        VisibleContent = BtnContent;
    });

    CoyoteButton.addEventListener("click", function (event) {

        if (VisibleContent) { VisibleContent.style.display = 'none'; }

        BtnContent = document.getElementById("CoyoteContent");
        BtnContent.style.display = 'flex';
        BtnContent.style.visibility = 'visible';

        VisibleContent = BtnContent;
    }); 
});
