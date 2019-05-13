import { Component, OnInit } from '@angular/core';
import laptopSales from '../../laptopSales'
import movieUserPreference from '../../movieUserPreference'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  
  pieChartData=[{
    data: [3,2,1]
  }]
  // int[]
  pieChartLabels=[]
  // string[]
  pieChartType="pie"
  // string

  constructor() { }
  ngOnInit() { 
    let numberOfLikes = {}

    for(let moviePopularity of movieUserPreference ){
      if(!numberOfLikes[moviePopularity.movie]){
        numberOfLikes[moviePopularity.movie] = 0
      }
      numberOfLikes[moviePopularity.movie] += 1
    }
    
    let tempStoreNumLikes = []

    for(let key in numberOfLikes){
      this.pieChartLabels.push(key)
      tempStoreNumLikes.push(numberOfLikes[key])
    }
    
    this.pieChartData = [{
      data: tempStoreNumLikes
    }]
   }

}


