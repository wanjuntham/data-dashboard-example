import { Component, OnInit } from '@angular/core';
import multiYearLaptopSales from '../../multiYearLaptopSales'

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  barChartData=[]
  
  // [{data: int[]}]
  barChartLabels=[]
  // string[]
  barChartType="bar"

  constructor() { }

  ngOnInit() {
    const profitByModel = {}
    let allMonths = [0,1,2,3,4,5,6,7,8,9,10,11]

    for(let transaction of multiYearLaptopSales){
      if(!profitByModel[transaction.model]){
        profitByModel[transaction.model] = {}
      }
      
      if(!profitByModel[transaction.model][transaction.monthSold]){
        profitByModel[transaction.model][transaction.monthSold] = 0
      }
      // if(!allMonths.includes(transaction.monthSold)){
      //   allMonths.push(transaction.monthSold)
      // }
      profitByModel[transaction.model][transaction.monthSold] += transaction.salesPrice - transaction.cost
      }
    

    this.barChartLabels = allMonths

    let tempProfitByModel = {}

    for(let model in profitByModel){
      let profits = profitByModel[model]
      for (let month of allMonths){
        if(!tempProfitByModel[model]){
          tempProfitByModel[model] = [] 
        }
        tempProfitByModel[model].push(profits[month])
      }
    }

    for(let model in tempProfitByModel){
      this.barChartData.push({
        data: tempProfitByModel[model],
        label: model
      })
    }
  }

}




