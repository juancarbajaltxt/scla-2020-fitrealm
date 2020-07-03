import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerAppPage } from './timer-app.page';
import { OverviewPage } from '../overview/overview.page';

const routes: Routes = [
  {
    path: '',
    component: TimerAppPage
  },
  {
    path: '/overview',
    component: OverviewPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimerAppPageRoutingModule {}
