$(document).ready(function(){
    $("#hdr-nav-btn").click(function(){
        $(".rr-header__nav").fadeToggle();
    });
    $(".rr-header__nav__link").click(function(){
        $(".rr-header__nav").fadeToggle();
    })

    $('#js-ad-close-btn').click(function(){
        $('#js-ad-popup').hide();
    })	
});