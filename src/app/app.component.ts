import { Component } from '@angular/core';

import { Http } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  caps_name;

  constructor() {
  	// http.get('http://localhost:3000/caps.json').subscribe(res => this.caps_name = res.json());
  }
}