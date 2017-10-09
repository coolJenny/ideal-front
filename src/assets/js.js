$(document).ready(function() {

    tinymce.init({
        selector: '#convertData',
        toolbar: false,
        menubar: false,
        statusbar: false,
        inline: true,
        // formats: {
        //     underline: {inline : '.editableText', 'classes' : 'underline', exact : true}
        // }
    });
    $('#convertDoc').click(function(e) {
        
        var contentDocument = tinymce.get('convertData').getDoc();
        var content = '<!DOCTYPE html>' + contentDocument.documentElement.outerHTML;
        var converted = htmlDocx.asBlob(content);
          
        saveAs(converted, 'test.docx');
        //open(converted);
    });

    // $('#convertPdf').click(function(e){
    //     var pdf = new jsPDF();

    //     pdf.text('This is a test', 10, 10)
    //     pdf.viewerPreferences({'FitWindow': true}, true)
    //     pdf.save("viewerPreferences.pdf")

    //     pdf.viewerPreferences({
    //       'HideWindowUI': true,
    //       'PrintArea': 'CropBox',
    //       'NumCopies': 10
    //     })
    // });

    // function generatePDF() {
    //     $('body').scrollTop(0);
    //     var element = $('#pdfData');

    //     var options = { pagesplit: true };
    //     var pdf = new jsPDF('p', 'pt', 'a4');

    //     pdf.addHTML(element, 0, 0, options, () => {
    //         pdf.save('test.pdf');
    //     });

    //     // var doc = new jsPDF();

    //     // // We'll make our own renderer to skip this editor
    //     // var specialElementHandlers = {
    //     //     '#editor': function(element, renderer){
    //     //         return false;
    //     //     },
    //     //     '.controls': function(element, renderer){
    //     //         return false;
    //     //     }
    //     // };

    //     // // All units are in the set measurement for the document
    //     // // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
    //     // doc.fromHTML($('body').get(0), 15, 15, {
    //     //     'width': 370, 
    //     //     'elementHandlers': specialElementHandlers
    //     // });
    // } 



    // function demoFromHTML() {
    //     $('body').scrollTop(0);
    //     var pdf = new jsPDF();

    //     var win = window.open('', '_blank');

    //     var specialElementHandlers = {
    //         '#passby': function (element, renderer) {
    //             return true;
    //         }
    //     };
        
    //     pdf.fromHTML($('#pdfData').get(0), 15, 15, {
    //         'width': 170,
    //         'elementHandlers': specialElementHandlers
    //     });
    // }



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