import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {SortTableService} from '../sort-table.service';
import {Data} from '../data';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css'],
})
export class ScoreCardComponent implements OnInit {
  studentsData;
  ngOnInit() {
    this.getData()
  }

  // ngAfterViewChecked(){
  //
  // }

  constructor(private http: HttpClient, public sort:SortTableService) {


      // this.http.get('assets/data.json')//, options)
      //
      //   .map((res: Response) => res)
      //   .subscribe(data=>{
      //     this.studentsData= data
      //   })
    var that = this;
    function enterData(){

      for(let i=0;i<that.studentsData.length;i++) {
        // console.log(that.studentsData)

        var totalMarks = Number(that.studentsData[i].marks.Science) + Number(that.studentsData[i].marks.Maths)  +Number(that.studentsData[i].marks.English)
        if(that.studentsData[i].marks.Science > 20 && that.studentsData[i].marks.Maths> 20 && that.studentsData[i].marks.English >20) {
          var status ="pass"
        }else{
          status ="fail"
        }
        var newData: Data = {
          studentName: that.studentsData[i].name,
          rollNumber: that.studentsData[i].rollNumber,
          totalMarks: totalMarks,
          status: status
        }
      that.sort.addItem(newData)
      }
      // console.log(newData)
    }
    setTimeout(() => {

      // var result,
      //     max=0;
      // $("td").filter(function(){
      //   var myval = parseInt($(this).eq(2).text());
      //
      //   if(myval > max){
      //     result = this;
      //     max = myval;
      //   }
      // });
      // result.addClass("highest");

      var highest = 0;

      $("table tr").each(function() {
        var current = parseInt($(this).find('td').eq(2).text());
        console.log(current, highest)
        if (current > highest) {
          highest = current;
          console.log(current, highest)

          $(".highest").removeClass();
          $(this).addClass('highest');
        }
      });

      $(".highest").find("td").eq(3).html("Topper")

      $(document).ready(function(){
        $('table tr').each(function(){
          // console.log($(this).find('td').eq(3).text())
          if($(this).find('td').eq(3).text() == "fail"){
            $(this).css('color','red');
          }
        });
      });

      $(".display").css('display', 'block')
    }, 1200)

    setTimeout(() => {
        // .parentElement.classList.add("fail");
      if(sort.data.length>0){

      }else{
        enterData()
      }


    }, 300);
  }

  getData() {
    this.http.get('assets/data.json')//, options)

      .map((res: Response) => res)
      .subscribe(data=>{
        this.studentsData= data
      })
  }

  // this.studentsData.map(data, i){
  //   name: data.name
  // }
}
