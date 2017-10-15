$(document).ready(function() {
  
    $(window).scroll(function(){
        if ($(this).scrollTop() < 300) {
            $('.bfooter').fadeIn();
        } else {
            $('.bfooter').fadeOut();
        }
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},"1000");
        return false;
    });
});