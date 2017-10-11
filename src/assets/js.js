$(document).ready(function() {

    // tinymce.init({
    //     selector: '#convertData',
    //     toolbar: false,
    //     menubar: false,
    //     statusbar: false,
    //     inline: true,
    //     // formats: {
    //     //     underline: {inline : '.editableText', 'classes' : 'underline', exact : true}
    //     // }
    // });
    // $('#convertDoc').click(function(e) {
    //     // let htmlEle = $('#convertData');
	// 	// let htmlString = $('<!DOCTYPE html>').html('<body>' + htmlEle + '</body>').get().outerHTML;

    //     var contentDocument = tinymce.get('convertData').getDoc();
    //     var content = '<!DOCTYPE html>' + contentDocument.documentElement.outerHTML;
    //     var converted = htmlDocx.asBlob(content);
          
    //     saveAs(converted, 'test.docx');
    //     //open(converted);
    // });

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
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},"900");
        return false;
    });
});