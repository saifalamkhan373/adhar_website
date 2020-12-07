/* Menu Toggle */

$(document).ready(function(){
   $("#toggler").click(function(){
     $("#toggle-nav").fadeToggle(500);
   });
 });

 $('.menu-toggle').on('click', function() {
   $('.wrapper').toggleClass('menu--is-revealed');
 });

 /* Half Page Responsive */

 $(document).ready(function($) {
   var alterClass = function() {
     var ww = document.body.clientWidth;
     if (ww < 1199) {
       $('.LeftContent ').removeClass('LeftContent');
       $('.RightContent ').removeClass('RightContent');
     } else if (ww >= 1200) {
       $('.LeftContent').addClass('LeftContent');
       $('.RightContent ').addClass('RightContent');
     };
   };
 });


 $(document).ready(function(){
  
  $('.text-field-input').on('focus', function(){
    $(this).closest('.field-wrapper').addClass('focused');
  });
  
  $('.text-field-input').on('blur', function(){
 
    if  ( $(this).val() === '') {
       $(this).closest('.field-wrapper').removeClass('focused');
    }
  });
  
})

