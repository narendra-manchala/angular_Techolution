import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  students = this.getData();
  constructor(private http: HttpClient) {
    console.log(this.students)
  }
  studentsData;
  getData() {
    this.http.get('assets/data.json')//, options)

      .map((res: Response) => res)
    .subscribe(data=>{
        this.studentsData= data
      })
  }
  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }
}
