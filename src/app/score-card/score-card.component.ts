import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {

  ngOnInit() {
    this.getData()
  }

  constructor(private http: HttpClient) {}
  studentsData;
  getData() {
    this.http.get('assets/data.json')//, options)

      .map((res: Response) => res)
      .subscribe(data=>{
        this.studentsData= data
      })
  }
}
