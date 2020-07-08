import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-challenge-new',
  templateUrl: './challenge-new.page.html',
  styleUrls: ['./challenge-new.page.scss'],
})
export class ChallengeNewPage implements OnInit {

data: any;

  constructor(private dataService: DataService) { }

  currentEx = {currentExe: 'Planks'}

  ngOnInit() {
    this.dataService.setData(this.currentEx);

  }

}
