import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { CodemirrorModule } from 'ng2-codemirror';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CapsComponent } from './caps/caps.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CapListComponent } from './cap-list/cap-list.component';
import { EwingSarcomaBiopsyComponent } from './ewing-sarcoma-biopsy/ewing-sarcoma-biopsy.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'caps/:id',
    component: CapsComponent
  },
  {
    path: 'caplist',
    component: CapListComponent
  },  
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'ewing-sarcoma-biopsy',
    component: EwingSarcomaBiopsyComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CapsComponent,
    AboutComponent,
    PageNotFoundComponent,
    CapListComponent,
    EwingSarcomaBiopsyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MaterializeModule,
    CodemirrorModule,
    FormsModule    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
