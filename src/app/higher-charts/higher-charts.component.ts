import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-higher-charts',
  templateUrl: './higher-charts.component.html',
  styleUrls: ['./higher-charts.component.scss']
})
export class HigherChartsComponent {


  linechart= ({
    chart :{
      type:'line'
    },
    title:{
      text:'Patients'
    },
    credits:{
      enabled:false
    },
    series:[
      {
        name:'patientadmitted',
        data:[10,23,12,3,41,4],
      } as any
    ]
    
  })
}
