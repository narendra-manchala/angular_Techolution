import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ScoreCardComponent } from './score-card/score-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AdmissionFormComponent,
    ScoreCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
