/* scroll top function */
window.onload = function() {
 jQuery(function($) {
   var offset = 300;
   var duration = 500;
   $(window).scroll(function() {
     if ($(this).scrollTop() > offset) {
       $('.back-to-top').fadeIn(duration);
     } 
     else {
       $('.back-to-top').fadeOut(duration);
     }
   });
   $('.back-to-top').unbind('click.smoothscroll').bind('click', function(e) {
     e.preventDefault();
     $('html, body').animate( { scrollTop: 0 }, duration);
     return false;
   })
 });
}