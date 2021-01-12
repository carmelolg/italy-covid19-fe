import { ChartService } from './../charts/chart.service';
import { Chart } from './../shared/model/Chart';
import { InfoChart } from './../shared/model/InfoChart';
import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-hospitalized',
  templateUrl: './hospitalized.component.html',
  styleUrls: ['./hospitalized.component.css']
})
export class HospitalizedComponent implements OnInit {

  @Input() region: string;
  @Input() intensiveCare: any;
  @Input() hospitalized: any;

  public totalHospitalizedInfo: InfoChart;
  public totalHospitalizedIncreaseInfo: InfoChart;
  public totalIntensiveCareInfo: InfoChart;
  public totalIntensiveCareIncreaseInfo: InfoChart;

  constructor(private datepipe: DatePipe, private chartService: ChartService) { }

  totalHospitalizedValues = [];
  totalHospitalizedIncreaseValues = [];
  totalHospitalized: Chart;
  totalHospitalizedIncrease: Chart;


  totalIntensiveCareValues = [];
  totalIntensiveCareIncreaseValues = [];
  totalIntensiveCare: Chart;
  totalIntensiveCareIncrease: Chart;

  ngOnInit(): void {

    this.totalHospitalizedInfo = new InfoChart();
    this.totalHospitalizedInfo.title = 'Andamento ricoveri ospedalieri';
    this.totalHospitalizedInfo.subtitle = this.region;
    this.totalHospitalizedInfo.firstLegend = 'Pazienti ricoverati in ospedale';
    this.totalHospitalizedInfo.desc = 'Il seguente grafico rappresenta l\'andamento dei pazienti ricoverati in ' + this.region;

    this.totalHospitalizedIncreaseInfo = new InfoChart();
    this.totalHospitalizedIncreaseInfo.title = 'Numero pazienti ricoverati';
    this.totalHospitalizedIncreaseInfo.subtitle = this.region;
    this.totalHospitalizedIncreaseInfo.secondLegend = 'Variazione quotidiana dei ricoverati in ' + this.region;
    this.totalHospitalizedIncreaseInfo.desc = 'Il seguente grafico mostra la variazione quotidiana degli ospedalizzati in '+ this.region;


    this.totalIntensiveCareInfo = new InfoChart();
    this.totalIntensiveCareInfo.title = 'Pazienti ricoverati in terapia intensiva';
    this.totalIntensiveCareInfo.subtitle = this.region;
    this.totalIntensiveCareInfo.firstLegend = 'Pazienti ricoverati in terapia intensiva';
    this.totalIntensiveCareInfo.desc = 'Il seguente grafico rappresenta l\'andamento delle persone che hanno avuto bisogno di cure in terapia intensiva in ' + this.region;

    this.totalIntensiveCareIncreaseInfo = new InfoChart();
    this.totalIntensiveCareIncreaseInfo.title = 'Numero di pazienti in terapia intensiva';
    this.totalIntensiveCareIncreaseInfo.subtitle = this.region;
    this.totalIntensiveCareIncreaseInfo.secondLegend = 'Variazione quotidiana dei ricoverati in terapia intensiva in ' + this.region;
    this.totalIntensiveCareIncreaseInfo.desc = 'Il seguente grafico mostra la variazione quotidiana degli ospedalizzati in terapia intensiva in ' + this.region;

    this.getHospitalized();
    this.getIntensiveCare();
  }


  getHospitalized() {
    if (this.hospitalized && this.hospitalized.results && this.hospitalized.results.length > 0) {
      var _dataLabels = [];
      this.hospitalized.results.forEach(item => {
        _dataLabels.push(this.datepipe.transform(item.data, 'dd/MM'));
        this.totalHospitalizedValues.push(item.value);
        this.totalHospitalizedIncreaseValues.push(item.increaseFromYesterday);
      });
      this.totalHospitalized = this.chartService.createChart(_dataLabels, 'Line', this.totalHospitalizedValues);
      this.totalHospitalizedIncrease = this.chartService.createChart(_dataLabels, 'Bar', this.totalHospitalizedIncreaseValues);
    }
  }

  getIntensiveCare() {
    if (this.intensiveCare && this.intensiveCare.results && this.intensiveCare.results.length > 0) {
      var _dataLabels = [];
      this.intensiveCare.results.forEach(item => {
        _dataLabels.push(this.datepipe.transform(item.data, 'dd/MM'));
        this.totalIntensiveCareValues.push(item.value);
        this.totalIntensiveCareIncreaseValues.push(item.increaseFromYesterday);
      });
      this.totalIntensiveCare = this.chartService.createChart(_dataLabels, 'Line', this.totalIntensiveCareValues);
      this.totalIntensiveCareIncrease = this.chartService.createChart(_dataLabels, 'Bar', this.totalIntensiveCareIncreaseValues);
    }
  }
}
