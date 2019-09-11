import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyComponent } from '../company.component';
import { LineChartComponent } from 'src/app/shared/line-chart/line-chart.component';

@Component({
  selector: 'app-projects-chart',
  templateUrl: './projects-chart.component.html',
  styleUrls: ['./projects-chart.component.scss']
})
export class ProjectsChartComponent implements OnInit {

  @ViewChild('chart') chart: LineChartComponent;

  constructor(public companyComponent: CompanyComponent) {

  }

  ngOnInit() {
    this.companyComponent.notification.subscribe((selection: string) => {
      if (selection === 'projects') {
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
