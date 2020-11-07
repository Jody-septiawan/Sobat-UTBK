$(document).ready(function () {
    $("#rr1").click(function () {
        $("#rr1").addClass("kelompok-active");
        $("#rr2").removeClass("kelompok-active");
        $("#rr3").removeClass("kelompok-active");
    });
    $("#rr2").click(function () {
        $("#rr2").addClass("kelompok-active");
        $("#rr1").removeClass("kelompok-active");
        $("#rr3").removeClass("kelompok-active");
    });
    $("#rr3").click(function () {
        $("#rr3").addClass("kelompok-active");
        $("#rr1").removeClass("kelompok-active");
        $("#rr2").removeClass("kelompok-active");
    });
});

if ($(window).width() > 992) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 55) {
            $('#navbar_top').addClass("fixed-top");
            // add padding top to show content behind navbar
            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        } else {
            $('#navbar_top').removeClass("fixed-top");
            // remove padding top from body
            $('body').css('padding-top', '0');
        }
    });
}

$(document).ready(function () {

    $(".CS").click(function () {
        alert("Coming Soon");
    });

    $("#quest1").click(function () {
        $(".answer1").slideToggle("slow", "linear");
    });
    $("#quest2").click(function () {
        $(".answer2").slideToggle("slow", "linear");
    });
    $("#quest3").click(function () {
        $(".answer3").slideToggle("slow", "linear");
    });
});