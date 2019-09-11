import { Component, OnInit, ViewChild } from '@angular/core';
import { LineChartComponent } from 'src/app/shared/line-chart/line-chart.component';
import { CompanyComponent } from '../company.component';

@Component({
  selector: 'app-events-chart',
  templateUrl: './events-chart.component.html',
  styleUrls: ['./events-chart.component.scss']
})
export class EventsChartComponent implements OnInit {

  @ViewChild('chart') chart: LineChartComponent;

  constructor(public companyComponent: CompanyComponent) {

  }

  ngOnInit() {
    this.companyComponent.notification.subscribe((selection: string) => {
      if (selection === 'events') {
        this.chart.chart = null;
        //this.setPaymentsData();
        this.chart.setStyle('1');
      } else {
        this.chart.setStyle('0.3', 'pointer');
        this.chart.resetChart();
      }
    })

  }
}
