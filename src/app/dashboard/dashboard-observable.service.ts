import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardObservableService {

  private newPositive: Subject<any> = new Subject();
  public newPositive$ = this.newPositive.asObservable();

  constructor() { }

  broadcastNewPositive(newPositive: any){
    this.newPositive.next(newPositive);
  }

  reset() {
    this.newPositive.next({});
  }

}
