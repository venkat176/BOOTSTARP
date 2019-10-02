$(document).ready(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop()) {
          $('#scroll-top').fadeIn();
        } else {
          $('#scroll-top').fadeOut();
        }
      });
    
      $('#scroll-top').click(function () {
        $("html, body").animate({
          scrollTop:0
        }, 2000);
          // return false;
        
        });
});