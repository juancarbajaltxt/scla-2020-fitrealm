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

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {

    var sum = this.dataService.getData();
    console.log(sum.type, sum.count);

  }

}
