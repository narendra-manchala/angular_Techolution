import { Injectable } from '@angular/core';
import {Data} from './data';

@Injectable()
export class SortTableService {
  data: Data[]=[];
  constructor() {
    // this.data.studentName.sort()
  }

  addItem(data: Data) {
    this.data.push(data);
    this.sort()
  }

  sort(){
    this.data.sort(function(a,b){
      return a.studentName.localeCompare(b.studentName)
    })
  }
}
