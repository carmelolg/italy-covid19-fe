import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartService } from '../../charts/chart.service';
import { Chart } from '../model/Chart';
import { InfoChart } from '../model/InfoChart';

@Component({
  selector: 'app-age-group-vaccine',
  templateUrl: './age-group-vaccine.component.html',
  styleUrls: ['./age-group-vaccine.component.css']
})
export class AgeGroupVaccineComponent implements OnInit {

  public chartInfo: InfoChart;
  public categoryChartInfo: InfoChart;
  public donutChartInfo: InfoChart;

  labels = [];
  manValues = [];
  womenValues = [];

  categoryLabels = [];
  ossValues = [];
  normalPeopleValues = [];
  rsaValues = [];
  over80Values = [];

  donutLabels = [];
  donutChartValues = [];

  chart: Chart;
  categoryChart: Chart;
  donutChart: Chart;

  @Input() region: string;
  @Input() data: any;

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {

    this.chartInfo = new InfoChart();
    this.chartInfo.title = 'Vaccinazioni per genere';
    this.chartInfo.subtitle = this.region;
    this.chartInfo.firstLegend = 'Donne';
    this.chartInfo.secondLegend = 'Uomini';
    this.chartInfo.desc = 'Il seguente grafico rappresenta le vaccinazioni di uomini e donne per fasce d\'età in Italia';

    this.categoryChartInfo = new InfoChart();
    this.categoryChartInfo.title = 'Vaccinazioni per categoria di persone';
    this.categoryChartInfo.subtitle = this.region;
    this.categoryChartInfo.firstLegend = 'Non sanitari';
    this.categoryChartInfo.secondLegend = 'Sanitari';
    this.categoryChartInfo.thirdLegend = 'RSA';
    this.categoryChartInfo.fourthLegend = 'Over 80';
    this.categoryChartInfo.desc = 'Il seguente grafico rappresenta le vaccinazioni divise per categoria e fasce d\'età in Italia';

    this.donutChartInfo = new InfoChart();
    this.donutChartInfo.title = 'Vaccinazioni per fasce d\'età';
    this.donutChartInfo.subtitle = this.region;
    this.donutChartInfo.desc = 'Il seguente grafico a torta rappresenta le vaccinazioni divise per fasce d\'età in Italia';


    this.createGenderChart();
    this.createCategoryChart();
    this.createDonutChart();

  }

  private createGenderChart() {

    this.data.forEach((item: any) => {
      this.labels.push(item.fasciaAnagrafica);
      this.manValues.push(item.sessoMaschile);
      this.womenValues.push(item.sessoFemminile);
    });

    const options: ChartOptions = {
      labels: this.labels,
      prefixLabel: "Età: ",
      type: 'Bar',
      allLabelsVisible: true
    };

    this.chart = this.chartService.generateChart(options, this.manValues, this.womenValues);

  }

  private createCategoryChart() {

    this.data.forEach((item: any) => {
      this.categoryLabels.push(item.fasciaAnagrafica);
      this.ossValues.push(item.categoriaOss);
      this.normalPeopleValues.push(item.categoriaNonSanitari);
      this.rsaValues.push(item.categoriaRsa);
      this.over80Values.push(item.categoriaOver80);
    });

    const options: ChartOptions = {
      labels: this.categoryLabels,
      prefixLabel: "Età: ",
      type: 'Bar',
      allLabelsVisible: true
    };

    this.categoryChart = this.chartService.generateChart(options, this.ossValues, this.normalPeopleValues, this.rsaValues, this.over80Values);

  }


  private createDonutChart() {
    // TODO
  }

}
