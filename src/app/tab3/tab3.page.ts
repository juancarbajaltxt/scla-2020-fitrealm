import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor(private dataService: DataService) {

  }

  fitness = {totalCaloriesLost: 0, addPushups: 0, beginPushups: 0, beginPushupsBank: 0, totalPushups: 0}
  

ngOnInit(){
  this.dataService.setData(this.fitness);
}

}
