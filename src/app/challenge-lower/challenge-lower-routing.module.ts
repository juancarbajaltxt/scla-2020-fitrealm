import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengeLowerPage } from './challenge-lower.page';
import { TimerAppPage } from '../timer-app/timer-app.page';
import { Tab1Page } from '../tab1/tab1.page';


const routes: Routes = [
  {
    path: '',
    component: ChallengeLowerPage
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengeLowerPageRoutingModule {}
