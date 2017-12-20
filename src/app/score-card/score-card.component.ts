import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {fail} from 'assert';

@Component({
  selector: 'score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css'],
})
export class ScoreCardComponent implements OnInit {

  ngOnInit() {
    this.getData()
  }

  // ngAfterViewChecked(){
  //
  // }

  constructor(private http: HttpClient) {
    setTimeout(() => {
      // run jQuery stuff here
      document.querySelector(".fail").parentElement.classList.add("fail");
    }, 1000);

  }
  studentsData;
  getData() {
    this.http.get('assets/data.json')//, options)

      .map((res: Response) => res)
      .subscribe(data=>{
        this.studentsData= data
      })
  }
}
