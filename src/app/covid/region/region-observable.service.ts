import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionObservableService {

  private regionName: Subject<string> = new Subject();
  public regionName$ = this.regionName.asObservable();

  private newPositive: Subject<any> = new Subject();
  public newPositive$ = this.newPositive.asObservable();

  constructor() { }

  broadcastNewPositive(newPositive: any) {
    this.newPositive.next(newPositive);
  }

  broadcastRegionName(name: string) {
    this.regionName.next(name);
  }

  reset() {
    this.regionName.next('');
    this.newPositive.next({});
  }

}
