import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengeStretchPage } from './challenge-stretch.page';
import { TimerAppPage } from '../timer-app/timer-app.page';
import { Tab1Page } from '../tab1/tab1.page';

const routes: Routes = [
  {
    path: '',
    component: ChallengeStretchPage
  },
  {
    path: '/timer-app',
  component: TimerAppPage
  },
  {
    path: '/tab1',
    component: Tab1Page,
  },
];

@NgModule({
  imports: [ 
    MbscModule,  
    FormsModule,  
RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengeStretchPageRoutingModule {}
