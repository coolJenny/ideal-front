function demoFromHTML() {
    $('body').scrollTop(0);
    var pdf = new jsPDF();

    var win = window.open('', '_blank');

    var specialElementHandlers = {
        '#passby': function (element, renderer) {
            return true;
        }
    };
    
    pdf.fromHTML($('#pdfData').ge(0), 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });
}

function generatePDF() {
        var element = document.getElementById('pdfData');

        var inner = document.getElementsByClassName('inner').inner(element);

        // var options = { pagesplit: false };
        // var pdf = new jsPDF('p', 'pt', 'a4');

        // pdf.addHTML(element, 0, 0, options, () => {
        //     pdf.save('test.pdf');
        // });
    } 

$(document).ready(function() {
   
    function generatePDF() {
        var element = document.getElementById('pdfData');

        var inner = document.getElementsByClassName('inner').inner(element);

        // var options = { pagesplit: false };
        // var pdf = new jsPDF('p', 'pt', 'a4');

        // pdf.addHTML(element, 0, 0, options, () => {
        //     pdf.save('test.pdf');
        // });
    } 
});