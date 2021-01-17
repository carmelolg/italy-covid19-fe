import { Utils } from './../shared/utils.service';
import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Tile } from './../shared/model/Tiles';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input() data: any;

  percentageCasesBasedOnTests = 0;

  currentTotalCases = 0;
  currentPositives = 0;
  newPositives = 0;
  variationNewPositives = 0;
  currentDead = 0;
  currentRecovered = 0;
  currentTests = 0;
  currentHospedalized = 0;
  currentIntesiveCare = 0;
  currentHomeIsolation = 0;

  genericTiles: Tile[] = [];

  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getGenericStats();
  }


  private getGenericStats() {
    this.genericTiles = [];

    if (!!this.data) {


      if (!!this.data.currentPositivePercentageBasedOnTests) {
        this.genericTiles.push({ footer: '', header: 'Tasso di positività', percentage: this.data.currentPositivePercentageBasedOnTests + '%', cols: 2, rows: 2, color: '#b3e0ff' });
      }

      if (!!this.data.currentTests) {
        this.genericTiles.push({ footer: '', header: 'Totale tamponi', percentage: this.formatHundreds(this.data.currentTests + ''), cols: 2, rows: 2, color: '#99d6ff' });
      }

      if (!!this.data.newPositives) {
        this.genericTiles.push({ footer: '', header: 'Nuovi positivi', percentage: this.formatHundreds(this.data.newPositives + ''), cols: 2, rows: 2, color: '#b3e0ff' });
      }

      if (!!this.data.variationNewPositives) {
        this.genericTiles.push({ footer: '', header: 'Variazione totale positivi', percentage: this.formatHundreds(this.data.variationNewPositives + ''), cols: 2, rows: 2, color: '#99d6ff' });
      }

      if (!!this.data.currentHospedalized) {
        this.genericTiles.push({ footer: '', header: 'Ricoverati', percentage: this.formatHundreds(this.data.currentHospedalized + ''), cols: 2, rows: 2, color: '#b3e0ff' });
      }

      if (!!this.data.currentIntesiveCare) {
        this.genericTiles.push({ footer: '', header: 'Terapia intensiva', percentage: this.formatHundreds(this.data.currentIntesiveCare + ''), cols: 2, rows: 2, color: '#99d6ff' });
      }

      if (!!this.data.currentDead) {
        this.genericTiles.push({ footer: '', header: 'Totale decessi', percentage: this.formatHundreds(this.data.currentDead + ''), cols: 2, rows: 2, color: '#b3e0ff' });
      }

      if (!!this.data.currentRecovered) {
        this.genericTiles.push({ footer: '', header: 'Totale guariti', percentage: this.formatHundreds(this.data.currentRecovered + ''), cols: 2, rows: 2, color: '#99d6ff' });
      }

      if (!!this.data.currentTotalCases) {
        this.genericTiles.push({ footer: '', header: 'Totale casi', percentage: this.formatHundreds(this.data.currentTotalCases + ''), cols: 2, rows: 2, color: '#b3e0ff' });
      }

      if (!!this.data.currentPositives) {
        this.genericTiles.push({ footer: '', header: 'Attualmente positivi', percentage: this.formatHundreds(this.data.currentPositives + ''), cols: 2, rows: 2, color: '#99d6ff' });
      }


      // this.currentTotalCases = (!!this.data.currentTotalCases) ? this.data.currentTotalCases : 0;
      // this.currentPositives = (!!this.data.currentPositives) ? this.data.currentPositives : 0;
      // this.newPositives = (!!this.data.newPositives) ? this.data.newPositives : 0;
      // this.variationNewPositives = (!!this.data.variationNewPositives) ? this.data.variationNewPositives : 0;
      // this.currentDead = (!!this.data.currentDead) ? this.data.currentDead : 0;
      // this.currentRecovered = (!!this.data.currentRecovered) ? this.data.currentRecovered : 0;
      // this.currentHospedalized = (!!this.data.currentHospedalized) ? this.data.currentHospedalized : 0;
      // this.currentIntesiveCare = (!!this.data.currentIntesiveCare) ? this.data.currentIntesiveCare : 0;
      // this.currentHomeIsolation = (!!this.data.currentHomeIsolation) ? this.data.currentHomeIsolation : 0;

      // this.genericTiles = [
      //   { footer: '', header: 'Tasso di positività', percentage: this.percentageCasesBasedOnTests + '%', cols: 2, rows: 2, color: '#b3e0ff' },
      //   { footer: '', header: 'Totale tamponi', percentage: this.formatHundreds(this.currentTests + ''), cols: 2, rows: 2, color: '#99d6ff' },
      //   { footer: '', header: 'Nuovi positivi', percentage: this.formatHundreds(this.newPositives + ''), cols: 2, rows: 2, color: '#b3e0ff' },
      //   { footer: '', header: 'Variazione totale positivi', percentage: this.formatHundreds(this.variationNewPositives + ''), cols: 2, rows: 2, color: '#99d6ff' },
      //   { footer: '', header: 'Ricoverati', percentage: this.formatHundreds(this.currentHospedalized + ''), cols: 2, rows: 2, color: '#b3e0ff' },
      //   { footer: '', header: 'Terapia intensiva', percentage: this.formatHundreds(this.currentIntesiveCare + ''), cols: 2, rows: 2, color: '#99d6ff' }, //99d6ff
      //   { footer: '', header: 'Totale decessi', percentage: this.formatHundreds(this.currentDead + ''), cols: 2, rows: 2, color: '#b3e0ff' },
      //   { footer: '', header: 'Totale guariti', percentage: this.formatHundreds(this.currentRecovered + ''), cols: 2, rows: 2, color: '#99d6ff' },
      //   { footer: '', header: 'Totale casi', percentage: this.formatHundreds(this.currentTotalCases + ''), cols: 2, rows: 2, color: '#b3e0ff' },
      //   { footer: '', header: 'Attualmente positivi', percentage: this.formatHundreds(this.currentPositives + ''), cols: 2, rows: 2, color: '#99d6ff' }
      // ];
    }
  }

  private formatHundreds(s: String): string {
    return Utils.formatHundreds(s);
  }


}
