import {Component, Input, OnInit} from '@angular/core';
import {ChartOptions, ChartService} from '../../charts/chart.service';
import {Chart} from '../model/Chart';
import {InfoChart} from '../model/InfoChart';

@Component({
  selector: 'app-age-group-vaccine',
  templateUrl: './age-group-vaccine.component.html',
  styleUrls: ['./age-group-vaccine.component.css']
})
export class AgeGroupVaccineComponent implements OnInit {

  public categoryChartInfo: InfoChart;
  public donutChartInfo: InfoChart;

  labels = [];
  manValues = [];
  womenValues = [];

  categoryLabels = [];
  
  primaDose = [];
  secondaDose = [];
  terzaDose = [];

/*
  ossValues = [];
  normalPeopleValues = [];
  rsaValues = [];
  over80Values = [];
*/

  donutLabels = [];
  donutChartValues = [];

  categoryChart: Chart;
  donutChart: Chart;

  @Input() provider: string;
  @Input() region: string;
  @Input() data: any;

  constructor(private chartService: ChartService) {
  }

  ngOnInit(): void {

    this.categoryChartInfo = new InfoChart();
    this.categoryChartInfo.title = this.provider ? 'Vaccinazioni ' + this.provider :  'Vaccinazioni per fasce d\'età';
    this.categoryChartInfo.subtitle = this.region;
    this.categoryChartInfo.firstLegend = 'Prima dose';
    this.categoryChartInfo.secondLegend = 'Seconda dose';
    this.categoryChartInfo.thirdLegend = 'Terza dose';
    //this.categoryChartInfo.fourthLegend = 'Over 80';
    this.categoryChartInfo.desc = 'Il seguente grafico rappresenta le vaccinazioni divise per categoria e fasce d\'età per la regione ' + this.region;

    this.createCategoryChart();

  }

  private createCategoryChart() {

    this.data.forEach((item: any) => {
      this.categoryLabels.push(item.fasciaAnagrafica);
      this.primaDose.push(item.primaDose);
      this.secondaDose.push(item.secondaDose);
      this.terzaDose.push(item.terzaDose);
      /*
      this.ossValues.push(item.categoriaOss);
      this.normalPeopleValues.push(item.categoriaNonSanitari);
      this.rsaValues.push(item.categoriaRsa);
      this.over80Values.push(item.categoriaOver80);
      */
    });

    const options: ChartOptions = {
      labels: this.categoryLabels,
      prefixLabel: 'Età: ',
      type: 'Bar',
      allLabelsVisible: true
    };

    this.categoryChart = this.chartService.generateChart(options, this.primaDose, this.secondaDose, this.terzaDose);

  }


}
