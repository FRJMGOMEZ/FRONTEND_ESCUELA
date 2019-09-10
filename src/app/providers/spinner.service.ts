import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public notification = new EventEmitter<any>();

  public pageHidden: string = 'hidden';
  public displaySpinner: boolean = false;

  constructor() { }

  public closeSpinner(){
     this.pageHidden = '';
     this.displaySpinner = false;
  }

  public openSpinner(){
     this.pageHidden = 'hidden';
     this.displaySpinner = true;
  }
}
