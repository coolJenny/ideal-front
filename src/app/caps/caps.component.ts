import { Component, OnInit, OnDestroy, Inject, Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { Headers, Http, Response, HttpModule } from '@angular/http';
import { RadioControlValueAccessor } from '@angular/forms';


import * as $ from 'jquery';
import * as jsPDF from 'jspdf';
import * as tinymce from 'tinymce';
import * as fileSaver from 'file-saver';

declare var tinymce: any;
declare var htmlDocx: any;

@Component({
	selector: 'app-caps',
	templateUrl: './caps.component.html',
	styleUrls: ['./caps.component.css'],
	providers: [{ provide: 'Window', useValue: window }]
})

export class CapsComponent implements AfterViewInit, OnInit, OnDestroy {
	public id: number;
	public sub: any;
	public path;

	public isEmpty: boolean = false;
	public el: ElementRef;

	cap_title = [ 'EWING SARCOMA: Biopsy', 'EWING SARCOMA: Resection', 'EXTRAGONADAL GERM CELL TUMOR: Biopsy, Resection',
	'HEPATOBLASTOMA (PEDIATRIC LIVER): Biopsy, Resection', 'NEUROBLASTOMA: Resection, Biopsy', 'RHABDOMYOSARCOMA AND RELATED NEOPLASMS: Biopsy, Resection', 'KIDNEY, PEDIATRIC RENAL TUMORS: Biopsy, Resection' ];
	cap_content: object;
	file_name: string;

	constructor(private route:ActivatedRoute, el: ElementRef) { 
		this.el = el;
	}

	ngAfterViewInit() {
		// tinymce.init({
		// 	selector: '#convertData',
	    //     toolbar: false,
	    //     menubar: false,
	    //     statusbar: false,
		// 	inline: true,
		// 	plugins: 'noneditable'
		// });
	}

	ngOnInit() {		
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];			
		});		
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
		tinymce.remove();
	}

	onChange(event){
		var pElement = event.target.parentElement;
		var cElement = event.target.parentElement.querySelector('input')
		console.log(cElement);
		var pclassAttr = pElement.attributes.class;
		if(event.target.value == "true"){
			cElement.style.display = "inline";
		}else{			
			cElement.style.display = "none";
		}
	}

	public generateDoc(){		
		let content = tinymce.get('convertData').getContent();		
		let converted = htmlDocx.asBlob(content);	
		this.file_name = this.id + '.docx';	
		fileSaver.saveAs(converted, this.file_name);

		//tinymce.activeEditor.dom.remove(tinymce.activeEditor.dom.select('input'));
		//tinymce.DOM.hide('chk');
		// let contentDocument = tinymce.get('convertData').getDoc();
        // let content = '<!DOCTYPE html>' + contentDocument.documentElement.outerHTML;
		// let converted = htmlDocx.asBlob(content);   
		// let fileName = this.id + '.docx';       
		// fileSaver.saveAs(converted, fileName);
		//window.location.reload();
	}

	public generatePdf() {
		let element = $('#convertData');		
		let options = { 
			pagesplit: true
		};
		let pdf = new jsPDF('p', 'pt', 'a3');
		let ext = this.id + '.pdf';
		pdf.addHTML(element, 0, 0, options, () => {
			this.path = pdf.save(ext);			
		});
	
	}
}
