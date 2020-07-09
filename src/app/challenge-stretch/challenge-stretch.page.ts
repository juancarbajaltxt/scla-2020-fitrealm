import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-challenge-stretch',
  templateUrl: './challenge-stretch.page.html',
  styleUrls: ['./challenge-stretch.page.scss'],
})
export class ChallengeStretchPage implements OnInit {

  data: any;

  constructor(private dataService: DataService) { }

  currentEx = {currentExe: 'Light Stretches'}

  ngOnInit() {
    this.dataService.setData(this.currentEx);
  }

}
