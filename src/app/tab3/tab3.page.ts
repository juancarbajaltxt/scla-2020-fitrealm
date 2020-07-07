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
  
  fitness3 = {totalCaloriesLost3: 0, addPushups3: 0, beginPushups3: 0, beginPushupsBank3: 0, totalPushups3: 0};
  calories = {calorie: 0,}

ngOnInit(){
  var progress = this.dataService.getData();
  console.log(progress.totalCaloriesLost3)

}
  


}
