import { Utils } from './../../shared/utils.service';
import { VaccineService } from './vaccine.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {

  constructor(private vaccineService: VaccineService) { }

  performed = 0;
  delivered = 0;
  percentage = 0;

  performedRanking: any = {};
  deliveredRanking: any = {};

  tiles = [];


  ngOnInit(): void {
    this.vaccineService.getRankingByDelivered().subscribe(ranking => {

      this.deliveredRanking = ranking;
      ranking.fullRanking.forEach(item => this.delivered += item.value);

      this.vaccineService.getRankingByPerformed().subscribe(_ranking => {

        this.performedRanking = _ranking;
        _ranking.fullRanking.forEach(item => this.performed += item.value);

        this.percentage = this.performed * 100 / this.delivered;

        this.tiles.push({ footer: '', header: 'Consegnati', percentage: this.formatHundreds(this.delivered.toString()), cols: 2, rows: 2, color: '#99d6ff' });
        this.tiles.push({ footer: '', header: 'Somministrati', percentage: this.formatHundreds(this.performed.toString()), cols: 2, rows: 2, color: '#b3e0ff' });
        this.tiles.push({ footer: '', header: 'Percentuale eseguiti', percentage: this.percentage.toFixed(2) + ' %', cols: 4, rows: 2, color: '#99d6ff' });

      });
    });

  }

  private formatHundreds(s: String): string {
    return Utils.formatHundreds(s);
  }

  public changeTabHandler(event: any): void {
  }

}
