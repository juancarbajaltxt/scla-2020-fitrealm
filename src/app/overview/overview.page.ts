import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

data: any;

  constructor(private dataService: DataService) {     

  }

  ngOnInit() {

    var tValues = this.dataService.getData();
    console.log(tValues.calLost, tValues.pushupsDone, tValues.ptimesDone);

    this.data = {cLost: tValues.calLost, thisEx: tValues.currentExe}
    console.log(this.data.cLost);

  }

}