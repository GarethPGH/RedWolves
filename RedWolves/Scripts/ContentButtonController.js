//Hides and Shows content based on button press.
//Figure out how to add event listener to 3 buttons 
//Wire their content appropriately
//CORRECTLY Implement the code in WolfButton to show content

document.addEventListener("DOMContentLoaded", function (event) {
    //Still acts wonkey because of where content is actually located in the HTML, but will work for my puurposes
    
    var WolfButton = document.getElementById("Wolf");
    var RedWolfButton = document.getElementById("RedWolf");
    var CoyoteButton = document.getElementById("Coyote");
    
    var VisibleContent;
    var BtnContent = document.getElementById("PageContent");
    
    WolfButton.addEventListener("click", function (event) {
        
        var LandingImage = document.getElementById("Landing");
        LandingImage.style.display = 'none';

        var element = document.getElementById('WolfContent');

        if (!element) {
            alert("no such element");
            return;
        }

        var pages = document.getElementsByClassName('Content');
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.display = 'none';
        }       

        element.style.display = 'flex';
        if (element.hasChildNodes) {
            element.childNodes.style.display = "flex";
        }

        
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
