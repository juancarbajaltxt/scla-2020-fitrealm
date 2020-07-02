import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewPage } from '../overview/overview.page';
import { TimerAppPage } from './timer-app.page';
import { Tab1Page } from '../tab1/tab1.page';
import { ChallengeNewPage } from '../challenge-new/challenge-new.page';

const routes: Routes = [
  {
    path: '',
    component: TimerAppPage
  },
  {
    path: 'overview',
    component: OverviewPage
  },
  {
    path: 'tab1',
    component: Tab1Page
  },
  {
    path: '/challenge-new',
    component: ChallengeNewPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimerAppPageRoutingModule {}
