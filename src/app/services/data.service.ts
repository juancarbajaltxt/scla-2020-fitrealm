import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private data : any;

  constructor() { }

  exType = '';

  exSelector = '';

  exDisplay(){


  }

  sendConfirm(){
    this.data.conf += 1;
  }
  

  setData(data) {
    this.data = data;
  }
 
  incrementPData(){
    this.data.calLost = this.data.calLost + 5;
    this.data.pushupsDone += 25;
    this.data.ptimesDone += 1;
    }

  getData() {
    return this.data;
  }
}
