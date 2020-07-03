import { Component, OnInit } from '@angular/core';
import { Procedure } from '../timer-app/timer-app.page';

@Component({
  selector: 'app-challenge-upper',
  templateUrl: './challenge-upper.page.html',
  styleUrls: ['./challenge-upper.page.scss'],
})
export class ChallengeUpperPage implements OnInit {

  pushRep() {
    this.Procedure = 'Push-Up';
  }

  constructor() { }

  ngOnInit() {
  }

}
