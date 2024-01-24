$(document).ready(function(){
 $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    nextArrow: $('.next'),
    prevArrow: $('.previous'),
    responsive: [
        {
            breakpoint: 890,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
 });

 $('#burger_menu').on('click', function() {
    $(this).toggleClass('open');
    $('.nav_adaptive').toggleClass('open');
    $('.main_section').toggleClass('open');
    $('body').toggleClass('locked'); 
    $('.header_logo').toggle();
 });

  $('.nav_item a').on('click', function() {
    $("#burger_menu").removeClass('open');
    $('.nav_adaptive').removeClass('open');
     $('.main_section').removeClass('open');
    $('body').removeClass('locked');
    $('.header_logo').css('display', 'block');
 });
});
