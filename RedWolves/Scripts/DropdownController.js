document.addEventListener("DOMContentLoaded", function (event) {
    Dropdowns.init();
    var foot = document.getElementById("Foot");
    var menu = document.getElementById("Dropdown");

    foot.addEventListener('onmouseover', function () {
        Dropdowns.render('menu', { isOpen: 'true' });
    });
    
});