import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import * as jsPDF from 'jspdf';
import * as tinymce from 'tinymce';
import * as fileSaver from 'file-Saver';

declare var tinymce: any;
declare var htmlDocx: any;
declare var fileSaver: any;

@Component({
  selector: 'app-ewing-sarcoma-biopsy',
  templateUrl: './ewing-sarcoma-biopsy.component.html',
  styleUrls: ['./ewing-sarcoma-biopsy.component.css']
})
export class EwingSarcomaBiopsyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    tinymce.init({
      selector: '#convertData',
      toolbar: false,
      menubar: false,
      statusbar: false,
      inline: true,
      // setup: function (editor) {
      //   editor.on('init', function (e) {
      //     console.log('Editor was initialized.');
      //   });
      // }
    });
    //tinymce.get('input').getBody().setAttribute('contenteditable', false);
  }

  public generateDoc(){
    
		let contentDocument = tinymce.get('convertData').getDoc();
        let content = '<!DOCTYPE html>' + contentDocument.documentElement.outerHTML;
        //tinymce.DOM.remove('input');   
        let converted = htmlDocx.asBlob(content);          
        fileSaver.saveAs(converted, 'test.docx');
	}

	public generatePdf() {
		let element = $('#convertData');		
		let options = { 
			pagesplit: true
		};
		let pdf = new jsPDF('p', 'cm', 'a3');
		let ext = 'ewing sarcoma biopsy.pdf';
		pdf.addHTML(element, 0, 0, options, () => {
			pdf.save(ext);
		});
	}

}
