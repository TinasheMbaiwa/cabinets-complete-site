$(document).ready(function () {
    $("#helpline_image").remove();
    $("#helpline_number").remove();
    if ($(window).width() > 1024) {
        HelpLineDesktop();
    }
});

$(document).resize(function () {
    $("#helpline_image").remove();
    $("#helpline_number").remove();

    HelpLineDesktop();

});

function HelpLineDesktop() {
    $("#header .container-fluid:last").prepend('<div id="helpline_image" ><span>Helpline</span></div>');
    $("#header .container-fluid:last").prepend('<div id="helpline_number" >+27 (0) 83 608 5810</div>');
    $("#helpline_image").click(function () {
        $("#helpline_image").hide(500);
        $("#helpline_number").show(500);
        ga('send', 'event', 'helpline', 'helpline_click', 'SA');
    });
}