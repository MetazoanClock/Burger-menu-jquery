$(document).ready(function() {
    $('.menu-burger__header').click(function() {
    $('.menu-burger__header,.header_menu,.header__nav-icon').toggleClass('active');
    $('body').toggleClass('lock');
    $('body').removeClass('lock');
    });
  });
  
  $('.header_menu').click(function(){
    $('.menu-burger__header,.header_menu,.header__nav-icon').removeClass('active');
    $('body').removeClass('lock');
  });

