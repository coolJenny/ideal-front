import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cap-list',
  templateUrl: './cap-list.component.html',
  styleUrls: ['./cap-list.component.css']
})
export class CapListComponent implements OnInit {

	cap_names1 = [ 'Ewing sarcoma biopsy', 'Ewing sarcoma resection', 'Extragonadal germ cell tumor biopsy & resection' ];
	cap_names2 = [ 'Hepatoblastoma biopsy & resection', 'Kidney tumors biopsy & resection', 'Neuroblastoma biopsy & resection' ];
	cap_names3 = 'Rhabdomyosarcoma biopsy & resection';

  constructor() { }

  ngOnInit() {
  }

}
