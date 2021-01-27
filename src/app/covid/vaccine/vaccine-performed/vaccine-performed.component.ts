import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccine-performed',
  templateUrl: './vaccine-performed.component.html',
  styleUrls: ['./vaccine-performed.component.css']
})
export class VaccinePerformedComponent implements OnInit {

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
