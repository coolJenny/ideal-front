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

	onCollapse(event){
		var leng = event.target.parentElement.children[1].children.length;
		for(let i=0; i<leng; i++){
			event.target.parentElement.children[1].children[i].style.display = 'block';
		}
	}

	onChange(event){
		var txt = event.target.parentElement.querySelector('input[type="text"]');
		var num = event.target.parentElement.querySelector('input[type="number"]');
		// if(txt){			
		// 	txt.attributes[1].value = true;
		// }
		// if(num){
		// 	num.attributes[1].value = true;
		// }
		
		var selfElement = event.target.parentElement;
		var childElement = selfElement.querySelectorAll('.indent1');
		var pElement = event.target.parentElement.parentElement;
		var arr = pElement.children;
		var n = arr.length;
		for(let i=0; i<n; i++){
			if(selfElement.attributes != arr[i].attributes){
				arr[i].style.display = 'none';				
			} else {
				selfElement.style.display = 'block';
				if(childElement){
					for(let i=0; i<childElement.length; i++){
						childElement[i].style.display = 'block';
					}
				}
				
			}
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
