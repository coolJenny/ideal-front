$(document).ready(function() {

    tinymce.init({
        selector: '#pdfData',
        toolbar: false,
        menubar: false,
        statusbar: false,
        inline: true,
        // formats: {
        //     underline: {inline : '.editableText', 'classes' : 'underline', exact : true}
        // }
    });
    $('#convert').click(function(e) {
        
        var contentDocument = tinymce.get('pdfData').getDoc();
        var content = '<!DOCTYPE html>' + contentDocument.documentElement.outerHTML;
        var converted = htmlDocx.asBlob(content);
          
        saveAs(converted, 'test.docx');
        //open(converted);
    });

    function generatePDF() {
        alert('sdklajkljlk');

        var element = $('#pdfData');

        var options = { pagesplit: false };
        var pdf = new jsPDF('p', 'pt', 'a4');

        pdf.addHTML(element, 0, 0, options, () => {
            pdf.save('test.pdf');
        });
    } 



    function demoFromHTML() {
        $('body').scrollTop(0);
        var pdf = new jsPDF();

        var win = window.open('', '_blank');

        var specialElementHandlers = {
            '#passby': function (element, renderer) {
                return true;
            }
        };
        
        pdf.fromHTML($('#pdfData').get(0), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });
    }


    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},"1000");
        return false;
    });
});