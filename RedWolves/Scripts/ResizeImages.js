document.addEventListener('DOMContentLoaded', function (event) {

    var ViewWidth = window.ViewWidth;
    var WImg = document.getElementById("WolfImg");
    var RImg = document.getElementById("RedWolfImg");
    var CImg = document.getElementById("CoyoteImg");

    console.log(ViewWidth);

    if (ViewWidth >= 1000) {
            RImg.src = //"Placeholder"
            WImg.src = //Placeholder
            CImg.src = //Placeholder
    }else if (ViewWidth < 1000 && ViewWidth > 400) {
            RImg.src = //"Placeholder"
            WImg.src = //Placeholder
            CImg.src = //Placeholder
    }else if (ViewWidth <= 400) {
            RImg.src = //"Placeholder"
            WImg.src = //Placeholder
            CImg.src = //Placeholder
    }else {
        console.log('Does not apply');
    }
    
});