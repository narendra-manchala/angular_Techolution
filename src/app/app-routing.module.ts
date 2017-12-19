import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdmissionFormComponent} from './admission-form/admission-form.component';
import { ScoreCardComponent} from './score-card/score-card.component';

const routes: Routes = [
  { path: 'admission', component: AdmissionFormComponent },
  {path:'scorecard', component: ScoreCardComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],

})

export class AppRoutingModule { }
