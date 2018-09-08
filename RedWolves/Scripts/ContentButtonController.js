//Hides and Shows content based on button press.


document.addEventListener("DOMContentLoaded", function (event) {
    //Still acts wonkey because of where content is actually located in the HTML, but will work for my puurposes
    
    var WolfButton = document.getElementById("Wolf");
    var RedWolfButton = document.getElementById("RedWolf");
    var CoyoteButton = document.getElementById("Coyote");
    
    var VisibleContent;
    var BtnContent = null;
    
    WolfButton.addEventListener("click", function (event) {

        var LandingImage = document.getElementById("Landing");
        LandingImage.style.display = 'none';

        if (VisibleContent) { VisibleContent.style.display = 'none'; }

        BtnContent = document.getElementById("WolfContent");
        BtnContent.style.display = 'flex';
        BtnContent.style.visibility = 'visible';

        VisibleContent = BtnContent;
    });

    RedWolfButton.addEventListener("click", function (event) {

        var LandingImage = document.getElementById("Landing");
        LandingImage.style.display = 'none';

        if (VisibleContent) { VisibleContent.style.display = 'none'; }

        BtnContent = document.getElementById("RedWolfContent");
        BtnContent.style.display = 'flex';
        BtnContent.style.visibility = 'visible';

        VisibleContent = BtnContent;
    });

    CoyoteButton.addEventListener("click", function (event) {

        var LandingImage = document.getElementById("Landing");
        LandingImage.style.display = 'none';

        if (VisibleContent) { VisibleContent.style.display = 'none'; }

        BtnContent = document.getElementById("CoyoteContent");
        BtnContent.style.display = 'flex';
        BtnContent.style.visibility = 'visible';

        VisibleContent = BtnContent;
    }); 
});
