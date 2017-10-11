import { Component, OnInit, OnDestroy, Inject, Directive, ElementRef, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { Headers, Http, Response, HttpModule } from '@angular/http';

import * as $ from 'jquery';
import * as jsPDF from 'jspdf';
import * as tinymce from 'tinymce';
import * as fileSaver from 'file-saver';

declare var htmlDocx: any;
declare var tinymce: any;

@Component({
	selector: 'app-caps',
	templateUrl: './caps.component.html',
	styleUrls: ['./caps.component.css'],
	providers: [{ provide: 'Window', useValue: window }]
})

export class CapsComponent implements OnInit, OnDestroy {
	public id: number;
	private sub: any;


	cap_title = [ 'EWING SARCOMA: Biopsy', 'EWING SARCOMA: Resection', 'EXTRAGONADAL GERM CELL TUMOR: Biopsy, Resection',
	'HEPATOBLASTOMA (PEDIATRIC LIVER): Biopsy, Resection', 'NEUROBLASTOMA: Resection, Biopsy', 'RHABDOMYOSARCOMA AND RELATED NEOPLASMS: Biopsy, Resection', 'KIDNEY, PEDIATRIC RENAL TUMORS: Biopsy, Resection' ];
	cap_content: object;
	file_name: string;

	constructor(private route:ActivatedRoute) { 
		
	}

	ngOnInit() {		
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];			
		});

		tinymce.init({
	        selector: '#convertData',
	        toolbar: false,
	        menubar: false,
	        statusbar: false,
			inline: true,
			plugins: "noneditable"
	    });
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	public generateDoc(){
		let contentDocument = tinymce.get('convertData').getDoc();
        let content = '<!DOCTYPE html>' + contentDocument.documentElement.outerHTML;
		let converted = htmlDocx.asBlob(content);   
		let ext = this.id + '.docx';       
        fileSaver.saveAs(converted, ext);
	}

	public generatePdf() {
		let element = $('#convertData');		
		let options = { 
			pagesplit: true
		};
		let pdf = new jsPDF('p', 'cm', 'a3');
		let ext = this.id + '.pdf';
		pdf.addHTML(element, 0, 0, options, () => {
			pdf.save(ext);
		});
	}
}
