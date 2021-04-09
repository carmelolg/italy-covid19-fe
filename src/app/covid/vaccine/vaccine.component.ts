import { Utils } from './../../shared/utils.service';
import { VaccineService } from './vaccine.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ChartService } from '../../charts/chart.service';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {

  constructor(private chartService: ChartService, private vaccineService: VaccineService) { }

  performed = 0;
  delivered = 0;
  percentage = 0;

  performedRanking: any = {};
  deliveredRanking: any = {};

  lastUpdate: any;
  vaccineData: any;
  tiles = [];


  ngOnInit(): void {
    this.init();
  }

  async init() {
    await this.getRankingByDelivered();
    await this.getRankingByPerformed();
    await this.getVaccineData();
    this.initTiles();
  }

  getRankingByDelivered() {
    return new Promise(resolve => {
      this.vaccineService.getRankingByDelivered().pipe(take(1)).subscribe(ranking => {
        this.deliveredRanking = ranking;
        ranking.fullRanking.forEach(item => this.delivered += item.value);
        resolve(true);
      });
    });
  }

  getRankingByPerformed() {
    return new Promise(resolve => {
      this.vaccineService.getRankingByPerformed().pipe(take(1)).subscribe(_ranking => {
        this.performedRanking = _ranking;
        _ranking.fullRanking.forEach(item => this.performed += item.value);
        this.percentage = this.performed * 100 / this.delivered;
        resolve(true);
      });
    });
  }

  getVaccineData() {
    return new Promise(resolve => {
      this.vaccineService.getVaccineData().pipe(take(1)).subscribe(data => {
        this.vaccineData = data.all;
        this.lastUpdate = data.all.ultimoAggiornamentoInterno;
        resolve(true);
      });
    });
  }

  initTiles() {
    this.tiles.push({ footer: '', header: 'Percentuale eseguiti', percentage: this.percentage.toFixed(2) + ' %', cols: 4, rows: 2, color: '#99d6ff' });
    this.tiles.push({ footer: '', header: 'Consegnati', percentage: this.formatHundreds(this.delivered.toString()), cols: 2, rows: 2, color: '#b3e0ff' });
    this.tiles.push({ footer: '', header: 'Somministrati', percentage: this.formatHundreds(this.performed.toString()), cols: 2, rows: 2, color: '#99d6ff' });
    this.tiles.push({ footer: '', header: 'Prima dose', percentage: this.formatHundreds(this.vaccineData.primaDose.toString()), cols: 2, rows: 2, color: '#b3e0ff' });
    this.tiles.push({ footer: '', header: 'Seconda dose', percentage: this.formatHundreds(this.vaccineData.secondaDose.toString()), cols: 2, rows: 2, color: '#99d6ff' });
    this.tiles.push({ footer: '', header: 'Uomini', percentage: this.formatHundreds(this.vaccineData.sessoMaschile.toString()), cols: 2, rows: 2, color: '#b3e0ff' });
    this.tiles.push({ footer: '', header: 'Donne', percentage: this.formatHundreds(this.vaccineData.sessoFemminile.toString()), cols: 2, rows: 2, color: '#99d6ff' });
    this.tiles.push({ footer: '', header: 'Sanitari', percentage: this.formatHundreds(this.vaccineData.categoriaOss.toString()), cols: 2, rows: 2, color: '#b3e0ff' });
    this.tiles.push({ footer: '', header: 'Non sanitari', percentage: this.formatHundreds(this.vaccineData.categoriaNonSanitari.toString()), cols: 2, rows: 2, color: '#99d6ff' });
    this.tiles.push({ footer: '', header: 'Scuola', percentage: this.formatHundreds(this.vaccineData.categoriaScuola.toString()), cols: 2, rows: 2, color: '#b3e0ff' });
    this.tiles.push({ footer: '', header: 'Altro', percentage: this.formatHundreds(this.vaccineData.categoriaAltro.toString()), cols: 2, rows: 2, color: '#99d6ff' });
    this.tiles.push({ footer: '', header: 'Over 80', percentage: this.formatHundreds(this.vaccineData.categoriaOver80.toString()), cols: 2, rows: 2, color: '#b3e0ff' });
    this.tiles.push({ footer: '', header: 'RSA', percentage: this.formatHundreds(this.vaccineData.categoriaRsa.toString()), cols: 2, rows: 2, color: '#99d6ff' });
  }

  private formatHundreds(s: String): string {
    return Utils.formatHundreds(s);
  }

  public changeTabHandler(event: any): void {
    this.chartService.updateChartModel();
  }

}
