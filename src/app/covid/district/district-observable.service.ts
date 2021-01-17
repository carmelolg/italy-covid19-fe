import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistrictObservableService {

  private districtName: Subject<string> = new Subject();
  public districtName$ = this.districtName.asObservable();

  constructor() { }


  broadcastDistrictName(name: string) {
    this.districtName.next(name);
  }

  reset() {
    this.districtName.next('');
  }

}
