import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { OverviewPage } from '../overview/overview.page';
//import { Tab3Page } from '../tab3/tab3.page';
import { TimerAppPageRoutingModule } from './timer-app-routing.module';
import { TimerAppPage } from './timer-app.page';
import { ChallengeNewPage } from '../challenge-new/challenge-new.page';

@NgModule({
  imports: [ 
    MbscModule, 
    CommonModule,
    FormsModule,
    IonicModule,
    TimerAppPageRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    OverviewPage,
    //Tab3Page,
    ChallengeNewPage,
  ],
  declarations: [TimerAppPage]
})
export class TimerAppPageModule {}
