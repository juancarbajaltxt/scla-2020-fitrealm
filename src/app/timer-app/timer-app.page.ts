import { Component, OnInit } from '@angular/core';
import { mobiscroll, MbscTimerOptions } from '@mobiscroll/angular';
import { OverviewPage } from '../overview/overview.page';
import { Router } from '@angular/router';

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

  timer: number;
  
    timerSettings: MbscTimerOptions = {
        display: 'inline',
        targetTime: 10,
        maxWheel: 'minutes',
        minWidth: 100,
        onFinish: () => {
            mobiscroll.alert({
                title: 'Countdown finished',
                message: 'Good Job! <br> Press OK to go to the next page'
            });
            this.goToOverview();
              
        }
  
    };

overviewPage: OverviewPage;

  constructor(private router: Router) { }

  goToOverview() {
//helper funiton - to do make the code more readable
    this.router.navigate(['/overview']);

  }

  ngOnInit() {
  }

}
