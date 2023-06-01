document.addEventListener("DOMContentLoaded", function() {
    var i = 0;
    var tag = document.getElementById("typeWritter");
    var html = document.getElementById("typeWritter").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 170;

    function typeWriter() {
        if (i <= txt.length) {
            document.getElementById("typeWritter").innerHTML = txt.slice(0 , i + 1);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
});