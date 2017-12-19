import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdmissionFormComponent} from './admission-form/admission-form.component';

const routes: Routes = [
  { path: 'admission', component: AdmissionFormComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],

})

export class AppRoutingModule { }
