import { Component, OnInit, Directive, ElementRef, Renderer2, Input } from '@angular/core';


import { Admission } from '../adform.model'

@Component({
  selector: 'admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {

  model = new Admission("","","", null,null)

  constructor() { }

  ngOnInit() {
  }

  get CurrentAdmission(){
    return JSON.stringify(this.model)
  }


}


