import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  exSelect = {exType: '',}
  timerValues = {calLost: 0, pushupsDone: 0, ptimesDone: 0, planksDone: 0, pltimesDone: 0, squatsDone: 0, stimesDone: 0,}
  sendconfirm = {conf: 0,}

  data: any; 

  constructor(public navCtrl: NavController, private dataService: DataService) {}

  navigatechallengePopup(): void {}

  ngOnInit() {

    console.log(this.sendconfirm.conf);
      
    this.dataService.setData(this.exSelect);

    this.dataService.setData(this.sendconfirm);

    this.dataService.sendConfirm();

    var auth = this.dataService.getData();

    this.data = {okie: auth.conf}

    console.log(this.data.okie);

    if(this.data.okie = 1) { 

      this.dataService.setData(this.timerValues);
      //in the sendconfirm function, it is adding 1 to the value once it is called, and what I want it to do is if the page is loaded again any other time, the conf value will keep increasing by 1: 
      //to stop the data from resetting itself
    }

  }

}
