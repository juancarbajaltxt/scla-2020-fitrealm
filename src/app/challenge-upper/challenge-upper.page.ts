import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-challenge-upper',
  templateUrl: './challenge-upper.page.html',
  styleUrls: ['./challenge-upper.page.scss'],
})
export class ChallengeUpperPage implements OnInit {

  data: any;

  constructor(private dataService: DataService) { }

  currentEx = {currentExe: 'Pushups'}

  ngOnInit() {
    this.dataService.setData(this.currentEx);

  }

}
