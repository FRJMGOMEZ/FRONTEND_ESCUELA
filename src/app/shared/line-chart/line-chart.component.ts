import { Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements  OnInit {

  public chart: Chart = null;

  public data:number[];
  public labels:string[];

  public chartId:string;

  @ViewChild('canvasRef') canvasRef : ElementRef;

  constructor( private renderer:Renderer2){}

  ngOnInit(){
    this.resetChart()
  }

  resetChart(){
    this.chart = new Chart('initial',{
      type: 'line',
      data: {
        labels:[],
        datasets: [
          {
            label: 'Data',
            fill: false,
            data:[],
            backgroundColor: '#168ede',
            borderColor: '#168ede'
          }
        ]
      },
      options: {
        tooltips: {
          enabled: false
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: 'white'
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: "blue"
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: "red",
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  setInfo(labels:string[],data:number[],id:string){
    this.labels=labels;
    this.data = data;
    this.chartId = id;
    this.render();
  }

  render(){
    this.renderer.setProperty(this.canvasRef.nativeElement, 'id', this.chartId);
    this.chart = new Chart(this.chartId, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'CARGO',
            fill: false,
            data: this.data,
            backgroundColor: '#168ede',
            borderColor: '#168ede'
          }
        ]
      },
      options: {
        tooltips: {
          enabled: false
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: 'white'
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: "blue"
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: "red",
              beginAtZero: true
            }
          }]
        }
      }
    });

  }

  onResize(){
    this.render()
  }

  setStyle(opacity:string,pointer?:string){
    this.renderer.setStyle(this.canvasRef.nativeElement,'opacity',opacity);
    if(pointer){this.renderer.setStyle(this.canvasRef.nativeElement,'cursor',pointer)};
  }


}