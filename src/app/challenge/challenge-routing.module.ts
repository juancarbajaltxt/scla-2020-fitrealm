import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab1Page } from '../tab1/tab1.page';
import { ChallengePage } from './challenge.page';
import { TimerAppPage } from '../timer-app/timer-app.page';

const routes: Routes = [
  {
    path: '',
    component: ChallengePage
  },
{
  path: '/tab1',
  component: Tab1Page
},
{
path: '/timer-app',
component: TimerAppPage
},

];

@NgModule({
  imports: [ 
    FormsModule,  
    MbscModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengePageRoutingModule {}
