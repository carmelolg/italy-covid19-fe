import { Utils } from './../../../shared/utils.service';
import { RegionObservableService } from './../region-observable.service';
import { RegionVaccineService } from './region-vaccine.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-region-vaccine',
  templateUrl: './region-vaccine.component.html',
  styleUrls: ['./region-vaccine.component.css']
})
export class RegionVaccineComponent implements OnInit {

  constructor(private regionVaccineService: RegionVaccineService, private regionObservableService: RegionObservableService, private datePipe: DatePipe) { }

  regionName: string;

  points: any = [];
  displayedColumns: string[] = ['comune', 'luogo'];

  stats: any = {};
  tiles = [];

  vaccinations: any[] = [];

  ngOnInit(): void {

    this.regionObservableService.regionName$.subscribe(name => {
      this.regionName = name;
      this.reset();
      this.getPoints();
      this.getVaccineStats();
      this.getVaccineData();
    });


  }

  getPoints() {
    this.regionVaccineService.getRegionSomministrationPoint(this.regionName).subscribe(points => {
      this.points = points.sort((a: any, b: any) => { return a.comune.localeCompare(b.comune); });
    });
  }

  getVaccineStats() {
    this.regionVaccineService.getRegionVaccineStats(this.regionName).subscribe(stats => {
      this.stats = stats.length > 0 ? stats[0] : {};
      this.tiles.push({ footer: '', header: 'Percentuale eseguiti', percentage: this.stats.percentualeSomministrazione.toFixed(2) + ' %', cols: 4, rows: 2, color: '#99d6ff' });
      this.tiles.push({ footer: '', header: 'Consegnati', percentage: this.formatHundreds(this.stats.dosiConsegnate.toString()), cols: 2, rows: 2, color: '#b3e0ff' });
      this.tiles.push({ footer: '', header: 'Somministrati', percentage: this.formatHundreds(this.stats.dosiSomministrate.toString()), cols: 2, rows: 2, color: '#b3e0ff' });
      this.tiles.push({ footer: '', header: 'Aggiornamento vaccini', percentage: this.datePipe.transform(this.stats.ultimoAggiornamentoInterno, 'dd-MM-yyyy HH:mm'), cols: 4, rows: 2, color: '#99d6ff' });
    });
  }

  getVaccineData() {
    this.regionVaccineService.getRegionVaccineData(this.regionName).subscribe(vaccineData => {

      Object.keys(vaccineData).forEach(key => {

        let _providerData: any = {};
        _providerData.name = key;
        let _innerArray = vaccineData[key];
        _providerData.data = _innerArray.sort((a: any, b: any) => { return a.fasciaAnagrafica.localeCompare(b.fasciaAnagrafica); });

        this.vaccinations.push(_providerData);
      });
    });
  }

  reset() {
    this.points = [];
    this.tiles = [];
    this.vaccinations = [];
  }

  private formatHundreds(s: String): string {
    return Utils.formatHundreds(s);
  }
}
