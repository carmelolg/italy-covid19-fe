import { VaccinePercentageService } from './vaccine-percentage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccine-percentage',
  templateUrl: './vaccine-percentage.component.html',
  styleUrls: ['./vaccine-percentage.component.css']
})
export class VaccinePercentageComponent implements OnInit {

  constructor(private vaccinePercentageService: VaccinePercentageService) { }

  bestFive = [];
  worstFive = [];
  fullRanking = [];

  ngOnInit(): void {
    this.vaccinePercentageService.getRankingBySomministrationPercentage().subscribe(ranking => {
      this.bestFive = ranking.bestRanked;
      this.worstFive = ranking.worstRanked;
      this.fullRanking = ranking.fullRanking;
    });
  }
}
