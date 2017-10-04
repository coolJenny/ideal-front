import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  selector: 'app-cap-list',
  templateUrl: './cap-list.component.html',
  styleUrls: ['./cap-list.component.css']
})
export class CapListComponent implements OnInit {

	cap_names1 = [ 'Ewing sarcoma biopsy', 'Ewing sarcoma resection', 'Extragonadal germ cell tumor biopsy & resection' ];
	cap_names2 = [ 'Hepatoblastoma biopsy & resection', 'Neuroblastoma biopsy & resection', 'Rhabdomyosarcoma biopsy & resection' ];
	cap_names3 = 'Kidney tumors biopsy & resection';

	caps_name;

  constructor() {
  	// http.get('http://localhost:3000/caps.json').subscribe(res => this.caps_name = res.json());
  }

  ngOnInit() {
  }

}
