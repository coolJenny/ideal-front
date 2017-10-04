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