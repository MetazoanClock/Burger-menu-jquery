$(document).ready(function() {
    $('.menu-burger__header').click(function() {
    $('.menu-burger__header,.header_menu').toggleClass('active');
    $('body').toggleClass('lock');
    });
  });
  
  $('.header_menu').click(function(){
    $('.menu-burger__header,.header_menu').removeClass('active');
     $('body').toggleClass('lock');
    $('body').removeClass('lock');
  });
  
