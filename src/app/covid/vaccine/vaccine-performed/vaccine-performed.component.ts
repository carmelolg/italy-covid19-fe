import { Component, OnInit } from '@angular/core';
import { VaccinePerformedService } from './vaccine-performed.service';

@Component({
  selector: 'app-vaccine-performed',
  templateUrl: './vaccine-performed.component.html',
  styleUrls: ['./vaccine-performed.component.css']
})
export class VaccinePerformedComponent implements OnInit {

  constructor(private vaccinePerformedService: VaccinePerformedService) { }

  bestFive = [];
  worstFive = [];
  fullRanking = [];

  ngOnInit(): void {
    this.vaccinePerformedService.getRankingByPerformed().subscribe(ranking => {
      this.bestFive = ranking.bestRanked;
      this.worstFive = ranking.worstRanked;
      this.fullRanking = ranking.fullRanking;
    });
  }
}
