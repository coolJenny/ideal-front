function demoFromHTML() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    source = $('#pdfData')[0];

    // we support special element handlers. Register them with jQuery-style 
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors 
    // (class, of compound) at this time.

    margins = {
    top: 80,
    bottom: 60,
    left: 40,
    width: 522
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
    source, // HTML string or DOM elem ref.
    margins.left, // x coord
    margins.top,
    pdf.save('Test.pdf')
    );
}

function testAttribute(element, attribute) {
    var test = document.createElement(element);
    if (attribute in test) {
        return true;
    }
    else 
        return false;
}

$(document).ready(function() {

    // $( "input[value='Hot Fuzz']" ).next().text( "Hot Fuzz" );

    $(':radio').click(function(e) {

        //$('.txt1').attr('placeholder', 'Type your answer...');;

        if (!testAttribute('input', 'autofocus'))
        $('.txt1').autofocus = true;
    });
});
    