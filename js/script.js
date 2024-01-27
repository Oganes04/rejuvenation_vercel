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

 //  $('.nav_item a').on('click', function() {
 //    $("#burger_menu").removeClass('open');
 //    $('.nav_adaptive').removeClass('open');
 //     $('.main_section').removeClass('open');
 //    $('body').removeClass('locked');
 //    $('.header_logo').css('display', 'block');
 // });




 $('#burger_menu2').on('click', function() {
    $(this).toggleClass('open');
    $('.nav_adaptive').toggleClass('open');
    // $('.nav_adaptive').css('left', '0');
    $('body').toggleClass('adaptive_header-bgc');
    $('html').toggleClass('locked');
    $('body').toggleClass('locked');
 });


  $('.nav_item a').on('click', function() {
   $(this).removeClass('open');
   $("#burger_menu2").removeClass('open');
   $('.nav_adaptive').removeClass('open');
   $('body').removeClass('adaptive_header-bgc');
   $('html').removeClass('locked');
   $('body').removeClass('locked');
 });

  $('.header_button').on('click', function() {
   $(this).removeClass('open');
   $("#burger_menu2").removeClass('open');
   $('.nav_adaptive').removeClass('open');
   $('body').removeClass('adaptive_header-bgc');
   $('html').removeClass('locked');
   $('body').removeClass('locked');
 });









 $('.slider-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: false,
    dots: false,
    arrows: true,
    nextArrow: $('.next-2'),
    prevArrow: $('.previous-2'),
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





function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var parent = el.closest('.progress_bar');
    var parentRect = parent ? parent.getBoundingClientRect() : {top: 0, left: 0, bottom: 0, right: 0};
  
    return (
        rect.top >= parentRect.top &&
        rect.left >= parentRect.left &&
        rect.bottom <= parentRect.bottom &&
        rect.right <= parentRect.right
    );
}

function getFirstVisibleCircle() {
    var circles = [];
    var allCircles = document.querySelectorAll('.dot');
    
    for (let circle of allCircles) {
        var style = window.getComputedStyle(circle);
        if (style.display !== 'none' && $(circle).is(":hidden") == 0) {
            circles.push(circle);
        }
    }
    
    var firstVisibleCircle = null;
    for (let circle of circles) {
        if (isElementInViewport(circle)) {
            firstVisibleCircle = circle;
            break;
        }
    }
    
    return firstVisibleCircle;
}
function getLastVisibleCircle() {
    var circles = [];
    var allCircles = document.querySelectorAll('.dot');
    
    for (let circle of allCircles) {
        var style = window.getComputedStyle(circle);
        if (style.display !== 'none' && $(circle).is(":hidden") == 0) {
            circles.push(circle);
        }
    }
    
    var lastVisibleCircle = null;
    for (let i = circles.length - 1; i >= 0; i--) {
        if (isElementInViewport(circles[i])) {
            lastVisibleCircle = circles[i];
            break;
        }
    }
    
    return lastVisibleCircle;
}









    $('.filled-dot-0').hide();
    $('.empty-dot-0').show();

$('.slider-2').on('afterChange', function(event, slick, currentSlide, nextSlide){
    
    // Сначала скроем все закрашенные кружки
    $('.filled-dot-').hide();
    $('.empty-dot-').hide();

    // Затем покажем закрашенный кружок текущего слайда
    $('.empty-dot-' + currentSlide).show();
    $('.filled-dot-' + currentSlide).hide();
    $('.empty-dot-' + (currentSlide - 1)).hide();
    $('.filled-dot-' + (currentSlide - 1) + ' circle').attr('fill', '#81693C');
    $('.line-' + (currentSlide - 1) + ' path').attr('stroke', '#81693C');



    var currentDot = document.querySelector('.empty-dot-' + currentSlide);
    if (currentDot == getLastVisibleCircle()) {
        document.querySelector('.progress_bar').scrollBy(570, 0);
    }
   
 


});


$('.slider-2').on('beforeChange', function(event, slick, currentSlide, nextSlide){

    // Сначала скроем все закрашенные кружки
    $('.filled-dot-').hide();
    $('.empty-dot-').hide();

    // Затем покажем закрашенный кружок текущего слайда
    
    $('.empty-dot-' + currentSlide).hide();
        $('.filled-dot-' + currentSlide).show();
        $('.empty-dot-' + (currentSlide + 1)).hide();

    if(nextSlide > currentSlide){
        
    } else {
        $('.filled-dot-' + (currentSlide - 1) + ' circle').attr('fill', '#9B9996');
        $('.line-' + (currentSlide - 1) + ' path').attr('stroke', '#9B9996');


        var currentDotBack = document.querySelector('.filled-dot-' + currentSlide);
        if (currentDotBack == getFirstVisibleCircle()) {
            document.querySelector('.progress_bar').scrollBy(-579, 0);
        }

    }
    currentSlide = nextSlide;





});















     $('.question-icon').click(function() {
        var $currentAnswer = $(this).parent().next('.questions_item-answer');
        var $currentQuestion = $(this).parent().parent();
        var $currentQuestionText = $(this).parent().find('.question-question');
        
        // Сбрасываем класс rotate и background-color у всех кнопок и вопросов
        $('.question-icon').find('img').removeClass('rotate');
        $('.questions_item').css('background-color', '#ffffff');
         $('.question-question').removeClass('bold');

        
        // Проверяем, раскрыт ли уже аккордеон
        if ($currentAnswer.is(':visible')) {
            $currentAnswer.slideUp();
          
        } else {
            $('.questions_item-answer').slideUp();
            $currentAnswer.slideDown();
            $currentQuestion.css('background-color', 'var(--translucent-color)');
            $currentQuestionText.addClass('bold');

            // Добавляем класс rotate только к нажатой кнопке
            $(this).find('img').addClass('rotate');
        }
    });





    $('.list_item-icon').click(function() {
        var $currentVideos = $(this).parent().next('.list_item-videos');
        var $currentItem = $(this).parent().parent();
        var $currentTheme = $(this).parent().find('.list_item-theme');
        var $currentHeader = $(this).parent();

        // Сбрасываем класс rotate и background-color у всех кнопок и вопросов
        $('.list_item-icon').find('img').removeClass('rotate');
        $('.list_item').removeClass('list_item-color')

        $('.list_item-theme').removeClass('bold');
        $('.list_item-header').css('border-bottom', '1px solid var(--dark-text-color)');

        // Проверяем, раскрыт ли уже аккордеон
        if ($currentVideos.is(':visible')) {
            $currentVideos.slideUp();


        } else {
            $('.list_item-videos').slideUp();
            $currentVideos.slideDown();
            $currentItem.addClass('list_item-color')
            $currentTheme.addClass('bold');
            $currentHeader.css('border-bottom', 'none');


            // Добавляем класс rotate только к нажатой кнопке
            $(this).find('img').addClass('rotate');
        }
    });


});




// document.getElementById('photo-upload').addEventListener('change', function(event) {
//     var file = event.target.files[0];
//     var reader = new FileReader();

//     reader.onload = function(e) {
//         document.getElementById('preview').src = e.target.result;
//     };

//     reader.readAsDataURL(file);
// });
