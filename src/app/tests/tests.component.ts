import { ChartService } from './../charts/chart.service';
import { Chart } from './../shared/model/Chart';
import { InfoChart } from './../shared/model/InfoChart';
import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  @Input() region: string;
  @Input() tests: any;
  @Input() newPositive: any;

  public totalTestsIncreaseInfo: InfoChart;
  public percentageNewPositiveByTestInfo: InfoChart;

  constructor(private datepipe: DatePipe, private chartService: ChartService) { }

  totalTestsIncreaseValues = [];
  totalTestsIncrease: Chart;
  percentageNewPositiveByTest: Chart;

  ngOnInit(): void {

    this.totalTestsIncreaseInfo = new InfoChart();
    this.totalTestsIncreaseInfo.title = 'Numero giornaliero di tamponi effettuati';
    this.totalTestsIncreaseInfo.subtitle = this.region;
    this.totalTestsIncreaseInfo.firstLegend = 'Tamponi effettuati giorno per giorno';
    this.totalTestsIncreaseInfo.desc = 'Il seguente grafico rappresenta la variazione giornaliera dei tamponi effettuati in Italia';

    this.percentageNewPositiveByTestInfo = new InfoChart();
    this.percentageNewPositiveByTestInfo.title = 'Percentuale di positivi sui test effettuati';
    this.percentageNewPositiveByTestInfo.subtitle = this.region;
    this.percentageNewPositiveByTestInfo.firstLegend = 'Percentuale';
    this.percentageNewPositiveByTestInfo.desc = 'Il seguente grafico rappresenta l\'andamento della percentuale di positivi rispetto ai tamponi effettuati in Italia';

    let _subsTests = this.getTests();

    _subsTests.subscribe(next => {
      this.getPercentage();
    });
  }

  getTests(): ReplaySubject<any> {

    const promise = new ReplaySubject(1);

    if (this.tests.results.length > 0) {
      var _dataLabels = [];
      this.tests.results.forEach(item => {
        _dataLabels.push(this.datepipe.transform(item.data, 'dd/MM'));
        this.totalTestsIncreaseValues.push(item.increaseFromYesterday);
      });
      this.totalTestsIncrease = this.chartService.createChart(_dataLabels, 'Line', this.totalTestsIncreaseValues);
      promise.next();
    }

    return promise;
  }

  getPercentage() {
    if (this.newPositive && this.newPositive.results.length > 0 && this.tests && this.tests.results && this.tests.results.length > 0) {
      let _percentageNewPositiveByTest: number[] = [];
      var _dataLabels = [];
      for (let index = 0; index < this.newPositive.results.length; index++) {
        const _newPositive = this.newPositive.results[index];
        const test = this.totalTestsIncreaseValues[index];
        _dataLabels.push(this.datepipe.transform(_newPositive.data, 'dd/MM'));

        _percentageNewPositiveByTest[index] = Number(((_newPositive.value * 100) / test).toFixed(2));
      }
      this.percentageNewPositiveByTest = this.chartService.createChart(_dataLabels, 'Line', _percentageNewPositiveByTest);
    }
  }

}
