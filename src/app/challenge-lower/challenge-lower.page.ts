import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-challenge-lower',
  templateUrl: './challenge-lower.page.html',
  styleUrls: ['./challenge-lower.page.scss'],
})
export class ChallengeLowerPage implements OnInit {

data: any;

  constructor(private dataService: DataService) { }

  currentEx = {currentExe: 'Squats'}

  ngOnInit() {
    this.dataService.setData(this.currentEx);

  }

}
