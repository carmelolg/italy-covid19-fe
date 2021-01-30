import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Chart } from './../model/Chart';
import { InfoChart } from './../model/InfoChart';
import { ChartService } from './../../charts/chart.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public resumeInfo: InfoChart;
  resumeDateLabels = [];
  resumeTotalValues = [];
  resumeNewValues = [];
  resumeRecoveredValues = [];
  resumeDeadValues = [];
  resume: Chart;

  @Input() region: string;
  @Input() data: any;

  constructor(private datepipe: DatePipe, private chartService: ChartService) { }

  ngOnInit(): void {
    this.resumeInfo = new InfoChart();
    this.resumeInfo.title = 'Riepilogo';
    this.resumeInfo.subtitle = this.region;
    this.resumeInfo.firstLegend = 'Totale casi';
    this.resumeInfo.secondLegend = 'Attualmente positivi';
    this.resumeInfo.thirdLegend = 'Guariti';
    this.resumeInfo.fourthLegend = 'Deceduti';
    this.resumeInfo.desc = 'Il seguente grafico raggruppa i principali dati sull\'epidemia: totale casi, attualmente positivi, guariti, deceduti';

    this.createResume();
  }

  private createResume() {
    this.data.forEach((item: any) => {

      let innerDate = this.datepipe.transform(item.data, 'dd/MM')
      this.resumeDateLabels.push(innerDate);
      this.resumeTotalValues.push(item.totalCases);
      this.resumeNewValues.push(item.nowPositives);
      this.resumeRecoveredValues.push(item.recovered);
      this.resumeDeadValues.push(item.dead);
    });

    this.resume = this.chartService.createChart(this.resumeDateLabels, 'Line', this.resumeTotalValues, this.resumeNewValues, this.resumeRecoveredValues, this.resumeDeadValues);

  }

}
