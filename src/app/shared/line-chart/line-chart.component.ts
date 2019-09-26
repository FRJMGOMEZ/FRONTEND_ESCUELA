import { Component, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { Chart } from 'chart.js';
import { DataLabelSet } from '../../models/chartDataSet.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {

  public chart: Chart = null;

  public dataSets:DataLabelSet[]=[]
  public labels:string[]=[]

  public chartId:string='initial';

  public labelFontSize:number = 12;

  @ViewChild('canvasRef') canvasRef : ElementRef;

  constructor( private renderer:Renderer2){}
  
  async setInfo(labels:string[],data:any[],dataLabel:string[],dataColors:string[],chartId:string){
    this.chartId=chartId;
    this.dataSets=[];
    await data.forEach((dataArray:number[],index:number)=>{
      let dataSet = new DataLabelSet(dataLabel[index], dataArray, false, dataColors[index]);
       this.dataSets.push(dataSet)
    });
    this.labels=labels; 
    this.checkLabelsSize().then((size:number)=>{
      this.labelFontSize = size;
      this.render(this.dataSets);
    })
  }

  render(dataSets:DataLabelSet[]){
    this.renderer.setProperty(this.canvasRef.nativeElement, 'id', this.chartId);
    this.chart = new Chart(this.chartId, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: dataSets
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        tooltips: {
          enabled: false
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontSize: this.labelFontSize,
            fontColor: 'black'
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontSize:this.labelFontSize,
              fontColor: "blue"
            }
          }],
          xAxes: [{
            ticks: {
              fontSize: this.labelFontSize,
              fontColor: "red",
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  onResize(){
    this.checkLabelsSize().then((size:number)=>{
      this.labelFontSize = size;
      this.render(this.dataSets);
    })  
  }

  setStyle(opacity:string,pointer?:string){
    this.renderer.setStyle(this.canvasRef.nativeElement,'opacity',opacity);
    if(pointer){this.renderer.setStyle(this.canvasRef.nativeElement,'cursor',pointer)};
  }

  checkLabelsSize(){
    return new Promise((resolve,reject)=>{
      if (window.innerHeight >= 694) {
        if (window.innerHeight >= 781) {
          if (window.innerHeight >= 833) {
            if (window.innerHeight >= 937) {
              if(window.innerHeight >= 1250){
                if(window.innerHeight >= 1875){
                  if(window.innerHeight >= 2500){
                     resolve(12*3.9)
                  }else{
                    resolve(12* 2.9)
                  }
                }else{
                  resolve(12 * 2);
                }
              }else{
                resolve(12 * 1.5);
              }
            } else {
              resolve(12*1.35);
            }

          } else {
            resolve(12 *1.25)
          }

        } else {
          resolve(12*1.1);
        }

      } else {
       resolve(12);
      }
    })
    }
}