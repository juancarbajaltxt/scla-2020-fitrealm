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
  
  data: any;

ngOnInit(){
  var progress = this.dataService.getData();
  

}
  


}
