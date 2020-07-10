import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  timerValues2 = {calLost2: 0, pushupsDone2: 0, ptimesDone2: 0, planksDone2: 0, pltimesDone2: 0, squatsDone2: 0, stimesDone2: 0,}
  numHolder = {}

  private data : any;

  constructor() { 
  }
  
  setData(data) {
    this.data = data;
  }
 
  incrementPData(){
    this.data.calLost += 55;
    this.data.pushupsDone += 25;
    this.data.ptimesDone += 1;
    }

    equalize(){
      this.data.exSelect = this.data.exType;
    }

  getData() {
    return this.data;
  }
}
