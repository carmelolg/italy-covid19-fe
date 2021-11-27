import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Utils {

  constructor() { }

  public static formatHundreds(s: String): string {
    return s.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  public static italyPopulation(): number {
    return 54009944; //vaccinabili su 60360000;
  }

}
