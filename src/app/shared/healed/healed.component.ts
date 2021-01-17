import { ChartService } from './../../charts/chart.service';
import { InfoChart } from './../model/InfoChart';
import { Chart } from './../model/Chart';
import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-healed',
  templateUrl: './healed.component.html',
  styleUrls: ['./healed.component.css']
})
export class HealedComponent implements OnInit {

  @Input() region: string;
  @Input() healed: any;

  public totalRecoveredInfo: InfoChart;
  public totalDeadIncreaseInfo: InfoChart;
  public totalRecoveredIncreaseInfo: InfoChart;

  constructor(private datepipe: DatePipe, private chartService: ChartService) { }

  totalRecoveredValues = [];
  totalRecoveredIncreaseValues = [];
  totalRecovered: Chart;
  totalRecoveredIncrease: Chart;

  ngOnInit(): void {

    this.totalRecoveredInfo = new InfoChart();
    this.totalRecoveredInfo.title = 'Guariti totali';
    this.totalRecoveredInfo.subtitle = this.region;
    this.totalRecoveredInfo.firstLegend = 'Persone guarite totali';
    this.totalRecoveredInfo.desc = 'Il seguente grafico rappresenta l\'andamento dei guariti in ' + this.region;

    this.totalRecoveredIncreaseInfo = new InfoChart();
    this.totalRecoveredIncreaseInfo.title = 'Numero di guariti giornalieri';
    this.totalRecoveredIncreaseInfo.subtitle = this.region;
    this.totalRecoveredIncreaseInfo.firstLegend = 'Persone guarite';
    this.totalRecoveredIncreaseInfo.desc = 'Il seguente grafico rappresenta l\'andamento giornaliero dei guariti in ' + this.region;

    this.getHealed();
  }

  getHealed() {
    if (this.healed.results.length > 0) {
      var _dataLabels = [];
      this.healed.results.forEach(item => {
        _dataLabels.push(this.datepipe.transform(item.data, 'dd/MM'));
        this.totalRecoveredValues.push(item.value);
        this.totalRecoveredIncreaseValues.push(item.increaseFromYesterday);
      });
      this.totalRecovered = this.chartService.createChart(_dataLabels, 'Line', this.totalRecoveredValues);
      this.totalRecoveredIncrease = this.chartService.createChart(_dataLabels, 'Line', this.totalRecoveredIncreaseValues);
    }
  }
}
