import { ChartService } from './../charts/chart.service';
import { Chart } from './../shared/model/Chart';
import { InfoChart } from './../shared/model/InfoChart';
import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  @Input() region: string;
  @Input() tests: any;

  public totalTestsIncreaseInfo: InfoChart;
  public percentageNewPositiveByTestInfo: InfoChart;

  constructor(private datepipe: DatePipe, private chartService: ChartService) { }

  totalTestsIncreaseValues = [];
  totalTestsIncrease: Chart;
  percentageNewPositiveByTest: Chart;

  ngOnInit(): void {

    this.totalTestsIncreaseInfo = new InfoChart();
    this.totalTestsIncreaseInfo.title = 'Numero giornaliero di tamponi effettuati';
    this.totalTestsIncreaseInfo.subtitle = 'Italia';
    this.totalTestsIncreaseInfo.firstLegend = 'Tamponi effettuati giorno per giorno';
    this.totalTestsIncreaseInfo.desc = 'Il seguente grafico rappresenta la variazione giornaliera dei tamponi effettuati in Italia';

    this.percentageNewPositiveByTestInfo = new InfoChart();
    this.percentageNewPositiveByTestInfo.title = 'Percentuale di positivi sui test effettuati';
    this.percentageNewPositiveByTestInfo.subtitle = 'Italia';
    this.percentageNewPositiveByTestInfo.firstLegend = 'Percentuale';
    this.percentageNewPositiveByTestInfo.desc = 'Il seguente grafico rappresenta l\'andamento della percentuale di positivi rispetto ai tamponi effettuati in Italia';

    this.getTests();
    this.getPercentage();
  }

  getTests() {
    if (this.tests.results.length > 0) {
      var _dataLabels = [];
      this.tests.results.forEach(item => {
        _dataLabels.push(this.datepipe.transform(item.data, 'dd/MM'));
        this.totalTestsIncreaseValues.push(item.increaseFromYesterday);
      });
      this.totalTestsIncrease = this.chartService.createChart(_dataLabels, 'Line', this.totalTestsIncreaseValues);
    }
  }

  getPercentage() {
    // let _percentageNewPositiveByTest: number[] = [];
    // for (let index = 0; index < this.totalNewCaseValues.length; index++) {
    //   const newPositive = this.totalNewCaseValues[index];
    //   const test = this.totalTestsIncreaseValues[index];

    //   _percentageNewPositiveByTest[index] = Number(((newPositive * 100) / test).toFixed(2));
    // }
    // this.percentageNewPositiveByTest = this.chartService.createChart(this.dataLabels, 'Line', _percentageNewPositiveByTest);
  }

}
