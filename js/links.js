
$(".link").each(function() {
    const fontsize = $(".normaltext").css("font-size");
    if($(this).height() > 1.2 * fontsize.substring(0, fontsize.length - 2)) {
        $(this).removeClass("lineLink");
        $(this).addClass("multilineLink");
    } else {
        $(this).removeClass("multilineLink");
        $(this).addClass("lineLink");
    }
});
function checkLinks() {
    $(".link").each(function() {
        const fontsize = $(this).css("font-size");
        if($(this).height() > 1.21 * fontsize.substring(0, fontsize.length - 2)) {
            $(this).removeClass("linelink");
            $(this).addClass("multilinelink");
        } else {
            $(this).removeClass("multilinelink");
            $(this).addClass("linelink");
        }
    });
}

$(document).ready(function() {
    $('div.fade').fadeIn(750).removeClass('div.fade');
    window.onload = checkLinks();
    window.onresize = checkLinks();
});