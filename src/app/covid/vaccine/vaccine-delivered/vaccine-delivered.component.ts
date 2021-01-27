import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccine-delivered',
  templateUrl: './vaccine-delivered.component.html',
  styleUrls: ['./vaccine-delivered.component.css']
})
export class VaccineDeliveredComponent implements OnInit {

  constructor() { }

  @Input() ranking: any = {};

  bestFive = [];
  worstFive = [];
  fullRanking = [];

  ngOnInit(): void {
    this.bestFive = this.ranking.bestRanked;
    this.worstFive = this.ranking.worstRanked;
    this.fullRanking = this.ranking.fullRanking;
  }

}
