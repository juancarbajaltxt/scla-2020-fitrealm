import { Component, OnInit } from '@angular/core';
import { mobiscroll, MbscTimerOptions } from '@mobiscroll/angular';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light',
};

@Component({
  selector: 'app-timer-app',
  templateUrl: './timer-app.page.html',
  styleUrls: ['./timer-app.page.scss'],
})
export class TimerAppPage implements OnInit {

  data: any;

  constructor(private route: Router, private dataService: DataService) { }

  

   timer: number;


    nextPage() {
      this.route.navigate(['/overview']);
    }

   timerSettings: MbscTimerOptions = {
       display: 'inline',
       targetTime: 10,
       maxWheel: 'minutes',
       minWidth: 100,
       onFinish: () => {
           mobiscroll.alert({
               title: 'Countdown finished',
               message: 'Yup, that\'s right, time\'s up. <br> Restart it by setting a new time.'

           });

           this.dataService.incrementPData();

           this.nextPage();
           
       }
   };

  ngOnInit() {

    var exChosen = this.dataService.getData();
    console.log(exChosen.currentExe);
    this.data = {exChose: exChosen.currentExe}

  }
  }
