$(function(){
    $('.slider__header').slick({
        dots: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1
    });
});

$( document ).ready(function(){
    $(".nav__btn").click(function() { // Тут класс твоей кнопки
        $('.nav__menu__cont').toggle(300);  // Тут класс твоего меню, предварительно оно "display:none"
    });
    $(".menu__close__img").click(function() { // Тут класс твоей кнопки
        $('.nav__menu__cont').toggle(500);  // Тут класс твоего меню, предварительно оно "display:none"
    });
});

// $(function(){
//     $('.block__3-slider-inner').slick({
//         dots: true,
//         arrows: false,
//     });
// });