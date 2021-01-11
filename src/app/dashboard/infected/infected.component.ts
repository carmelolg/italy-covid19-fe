import { ChartService } from './../chart.service';
import { InfoChart } from './../../shared/model/InfoChart';
import { Chart } from './../../shared/model/Chart';
import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-infected',
  templateUrl: './infected.component.html',
  styleUrls: ['./infected.component.css']
})
export class InfectedComponent implements OnInit {

  public growthRatesInfo: InfoChart;
  public totalNewCasesInfo: InfoChart;
  public totalPositivesInfo: InfoChart;
  public totalNewCasesVariationInfo: InfoChart;

  growthRateValues = [];
  growthRates: Chart;

  totalNewCaseValues = [];
  totalNewCases: Chart;

  totalPositiveValues = [];
  totalPositives: Chart;

  totalNewCaseVariationValues = [];
  totalNewCasesVariation: Chart;

  @Input() region: string;
  @Input() growthRatesData: any;
  @Input() newCasesData: any;
  @Input() totalPositiveData: any;
  @Input() newCasesVariationData: any;

  constructor(private datepipe: DatePipe, private chartService: ChartService) { }

  ngOnInit(): void {

    this.growthRatesInfo = new InfoChart();
    this.growthRatesInfo.title = 'Tasso di crescita';
    this.growthRatesInfo.subtitle = this.region;
    this.growthRatesInfo.secondLegend = 'Tasso di crescita giornaliero';
    this.growthRatesInfo.desc = 'Il seguente grafico rappresenta l\'andamento del tasso di crescita dell\'epidemia in Italia';

    this.totalNewCasesInfo = new InfoChart();
    this.totalNewCasesInfo.title = 'Variazione totale contagiati';
    this.totalNewCasesInfo.subtitle = this.region;
    this.totalNewCasesInfo.firstLegend = 'Contagiati';
    this.totalNewCasesInfo.desc = 'Il seguente grafico rappresenta l\'andamento giornaliero dei contagiati totali';

    this.totalNewCasesVariationInfo = new InfoChart();
    this.totalNewCasesVariationInfo.title = 'Variazione del totale positivi';
    this.totalNewCasesVariationInfo.subtitle = this.region;
    this.totalNewCasesVariationInfo.firstLegend = 'Positivi';
    this.totalNewCasesVariationInfo.desc = 'Il seguente grafico rappresenta la variazione del totale dei positivi';

    this.totalPositivesInfo = new InfoChart();
    this.totalPositivesInfo.title = 'Persone attualmente positive';
    this.totalNewCasesVariationInfo.subtitle = this.region;
    this.totalPositivesInfo.firstLegend = 'Numero di persone attualmente positive';
    this.totalPositivesInfo.desc = 'Il seguente grafico rappresenta l\'andamento delle persone attualmente positive in Italia';

    this.getGrowthRates();
    this.getNewCases();
    this.getNewCasesVariation();
    this.getTotalPositive();
  }

  getGrowthRates() {
    if (this.growthRatesData && this.growthRatesData.results && this.growthRatesData.results.length) {
      var _dataLabels = [];
      this.growthRatesData.results.forEach(item => {
        let innerDate = this.datepipe.transform(item.date, 'dd/MM')
        _dataLabels.push(innerDate);
        this.growthRateValues.push(item.value);
      });
      this.growthRates = this.chartService.createChart(_dataLabels, 'Bar', this.growthRateValues);
    }
  }

  getNewCases() {
    if (this.newCasesData && this.newCasesData.results && this.newCasesData.results.length) {
      var _dataLabels = [];
      this.newCasesData.results.forEach(item => {
        _dataLabels.push(this.datepipe.transform(item.data, 'dd/MM'));
        this.totalNewCaseValues.push(item.value);
      });
      this.totalNewCases = this.chartService.createChart(_dataLabels, 'Line', this.totalNewCaseValues);

    }
  }

  getTotalPositive() {
    if (this.totalPositiveData && this.totalPositiveData.results && this.totalPositiveData.results.length) {
      var _dataLabels = [];
      this.totalPositiveData.results.forEach(item => {
        let innerDate = this.datepipe.transform(item.data, 'dd/MM')
        _dataLabels.push(innerDate);
        this.totalPositiveValues.push(item.value);
      });
      this.totalPositives = this.chartService.createChart(_dataLabels, 'Line', this.totalPositiveValues);
    }
  }

  getNewCasesVariation() {
    if (this.newCasesVariationData && this.newCasesVariationData.results && this.newCasesVariationData.results.length) {
      var _dataLabels = [];
      this.newCasesVariationData.results.forEach(item => {
        _dataLabels.push(this.datepipe.transform(item.data, 'dd/MM'));
        this.totalNewCaseVariationValues.push(item.value);
      });
    }
    this.totalNewCasesVariation = this.chartService.createChart(_dataLabels, 'Line', this.totalNewCaseVariationValues);
  }
}

