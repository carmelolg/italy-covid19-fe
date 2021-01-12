import { ChartService } from './../charts/chart.service';
import { InfoChart } from './../shared/model/InfoChart';
import { Chart } from './../shared/model/Chart';
import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dead',
  templateUrl: './dead.component.html',
  styleUrls: ['./dead.component.css']
})
export class DeadComponent implements OnInit {

  @Input() region: string;
  @Input() dead: any;

  public totalDeadInfo: InfoChart;
  public totalDeadIncreaseInfo: InfoChart;

  totalDeadValues = [];
  totalDeadIncreaseValues = [];
  totalDead: Chart;
  totalDeadIncrease: Chart;

  constructor(private datepipe: DatePipe, private chartService: ChartService) { }

  ngOnInit(): void {

    this.totalDeadInfo = new InfoChart();
    this.totalDeadInfo.title = 'Deceduti totali';
    this.totalDeadInfo.subtitle = this.region;
    this.totalDeadInfo.firstLegend = 'Persone decedute totali';
    this.totalDeadInfo.desc = 'Il seguente grafico rappresenta l\'andamento dei decessi in ' + this.region;

    this.totalDeadIncreaseInfo = new InfoChart();
    this.totalDeadIncreaseInfo.title = 'Numero di deceduti giornalieri';
    this.totalDeadIncreaseInfo.subtitle = this.region;
    this.totalDeadIncreaseInfo.firstLegend = 'Persone decedute';
    this.totalDeadIncreaseInfo.desc = 'Il seguente grafico rappresenta l\'andamento giornaliero dei decessi in ' + this.region;

    this.getDead();
  }

  getDead() {
    if (this.dead.results.length > 0) {
      var _dataLabels = [];
      this.dead.results.forEach(item => {
        _dataLabels.push(this.datepipe.transform(item.data, 'dd/MM'));
        this.totalDeadValues.push(item.value);
        this.totalDeadIncreaseValues.push(item.increaseFromYesterday);
      });
    }
    this.totalDead = this.chartService.createChart(_dataLabels, 'Line', this.totalDeadValues);
    this.totalDeadIncrease = this.chartService.createChart(_dataLabels, 'Line', this.totalDeadIncreaseValues);
  }

}
