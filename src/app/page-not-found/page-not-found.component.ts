import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

	private currentUrl: string;

  constructor(@Inject(DOCUMENT) private document: any) { 
  	this.currentUrl = this.document.location.href;
  }

  ngOnInit() {
  	
  }

  refresh(): void{
  	window.location.reload();
  }
}
