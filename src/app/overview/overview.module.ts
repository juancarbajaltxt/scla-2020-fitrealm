import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from '../tab3/tab3.page';
import { IonicModule } from '@ionic/angular';
import { OverviewPageRoutingModule } from './overview-routing.module';
import { TimerAppPage } from '../timer-app/timer-app.page';
import { OverviewPage } from './overview.page';
import { Router } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewPageRoutingModule,
    Tab3Page,
    TimerAppPage,
    Router,
  ],
  declarations: [OverviewPage]
})
export class OverviewPageModule {}
