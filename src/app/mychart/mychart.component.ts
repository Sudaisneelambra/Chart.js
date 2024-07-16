import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { ChartService } from '../chart.service';
import { Observable } from 'rxjs';
Chart.register(...registerables);

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.scss'],
})
export class MychartComponent implements OnInit {
  constructor(private chatService: ChartService) {}

  chartData: any;
  labelData: any[] = [];
  realData: any[] = [];
  color: any[] = [];
  
  ngOnInit(): void {
    this.chatService.GetChartInfo().subscribe({
      next: (res) => {
        this.chartData = res;
        if (this.chartData !== null) {
          for (const i of this.chartData) {
            this.labelData.push(i?.year);
            this.realData.push(i?.amount);
            this.color.push(i?.colorCode);
          }
          this.RenderChart(this.labelData,this.realData,this.color,'bar','bar-chart');
          this.RenderChart(this.labelData,this.realData,this.color,'pie','pie-chart');
          this.RenderChart(this.labelData,this.realData,this.color,'doughnut','doughnut-chart');
          this.RenderChart(this.labelData,this.realData,this.color,'polarArea','polarArea-chart');
          this.RenderChart(this.labelData,this.realData,this.color,'radar','radar-chart')


        }
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.RendeBubbleChart()
    this.RendeScatterChart()
  }

  RenderChart(label:any,data:any,color:any,type:any,id:any) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: label,
        datasets: [
          {
            label: 'list of Votes',
            backgroundColor:color,
            borderColor: ['black'],
            data: data,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  RendeBubbleChart(){

    const data = {
      datasets: [{
        label: 'First Dataset',
        data: [{
          x: 20,
          y: 30,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    };

    const myChart = new Chart('bubble-chart', {
      type: 'bubble',
      data: data,
      options: {
      },
    });
  }

  RendeScatterChart(){

    const data = {
      datasets: [{
        label: 'Scatter Dataset',
        data: [{
          x: -10,
          y: 0
        }, {
          x: 0,
          y: 10
        }, {
          x: 10,
          y: 5
        }, {
          x: 0.5,
          y: 5.5
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }],
    };

    const myChart = new Chart('Scatter-chart', {
      type: 'scatter',
      data: data,
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          }
        }
      },
    });
  }
}
