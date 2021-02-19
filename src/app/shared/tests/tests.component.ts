import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ChartService } from '../../charts/chart.service';
import { Chart } from '../model/Chart';
import { InfoChart } from '../model/InfoChart';

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
  totalTestsMolecolariIncreaseValues = [];
  totalTestsAntigeniciRapidiIncreaseValues = [];
  totalTestsIncrease: Chart;
  percentageNewPositiveByTest: Chart;

  ngOnInit(): void {

    this.totalTestsIncreaseInfo = new InfoChart();
    this.totalTestsIncreaseInfo.title = 'Numero giornaliero di tamponi effettuati';
    this.totalTestsIncreaseInfo.subtitle = this.region;
    this.totalTestsIncreaseInfo.firstLegend = 'Tamponi effettuati giorno per giorno';
    this.totalTestsIncreaseInfo.secondLegend = 'Tamponi molecolari';
    this.totalTestsIncreaseInfo.thirdLegend = 'Tamponi antigenici rapidi';
    this.totalTestsIncreaseInfo.desc = 'Il seguente grafico rappresenta la variazione giornaliera dei tamponi effettuati in Italia';

    this.percentageNewPositiveByTestInfo = new InfoChart();
    this.percentageNewPositiveByTestInfo.title = 'Percentuale di positivi sui test effettuati';
    this.percentageNewPositiveByTestInfo.subtitle = this.region;
    this.percentageNewPositiveByTestInfo.firstLegend = 'Percentuale';
    this.percentageNewPositiveByTestInfo.desc = 'Il seguente grafico rappresenta l\'andamento della percentuale di positivi rispetto ai tamponi effettuati in Italia';

    const subsTests = this.getTests();

    subsTests.subscribe(_ => {
      this.getPercentage();
    });
  }

  getTests(): ReplaySubject<any> {

    const promise = new ReplaySubject(1);

    if (this.tests.results.length > 0) {
      const dataLabels = [];
      this.tests.results.forEach(item => {
        dataLabels.push(this.datepipe.transform(item.data, 'dd/MM'));
        this.totalTestsIncreaseValues.push(item.increaseFromYesterday);
        this.totalTestsMolecolariIncreaseValues.push(item.increaseFromYesterdayTotaleMolecolare);
        this.totalTestsAntigeniciRapidiIncreaseValues.push(item.increaseFromYesterdayTotaleAntigenicoRapido);
      });
      this.totalTestsIncrease = this.chartService.createChart(dataLabels, 'Line',
        this.totalTestsIncreaseValues, this.totalTestsMolecolariIncreaseValues, this.totalTestsAntigeniciRapidiIncreaseValues);
      promise.next();
    }

    return promise;
  }

  getPercentage() {
    if (this.newPositive && this.newPositive.results.length > 0 && this.tests && this.tests.results && this.tests.results.length > 0) {
      const percentageNewPositiveByTest: number[] = [];
      const dataLabels = [];
      for (let index = 0; index < this.newPositive.results.length; index++) {
        const _newPositive = this.newPositive.results[index];
        const test = this.totalTestsIncreaseValues[index];
        dataLabels.push(this.datepipe.transform(_newPositive.data, 'dd/MM'));

        percentageNewPositiveByTest[index] = Number(((_newPositive.value * 100) / test).toFixed(2));
      }
      this.percentageNewPositiveByTest = this.chartService.createChart(dataLabels, 'Line', percentageNewPositiveByTest);
    }
  }

}
