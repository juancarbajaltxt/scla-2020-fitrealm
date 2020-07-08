import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-challenge-cardio',
  templateUrl: './challenge-cardio.page.html',
  styleUrls: ['./challenge-cardio.page.scss'],
})
export class ChallengeCardioPage implements OnInit {

  data: any;

  constructor(private dataService: DataService) { }

  currentEx = {currentExe: 'Jogs'}

  ngOnInit() {

    this.dataService.setData(this.currentEx);
  }

}
