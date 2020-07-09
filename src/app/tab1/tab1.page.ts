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
    console.log(this.timerValues);
    this.dataService.setData(this.timerValues);
  }

}
