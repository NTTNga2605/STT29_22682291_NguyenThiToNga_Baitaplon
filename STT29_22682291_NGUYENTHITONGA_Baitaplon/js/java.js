$(window).on("scroll", function() {
    if ($(this).scrollTop() > 0) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
});

$("#menu-icon").on("click", function() {
    $(this).toggleClass("bi-x");
    $(".navmenu").toggleClass("d-flex");
});