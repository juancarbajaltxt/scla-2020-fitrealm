import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab1Page } from '../tab1/tab1.page';
import { OverviewPage } from './overview.page';
import { Tab3Page } from '../tab3/tab3.page'

const routes: Routes = [
  {
    path: '',
    component: OverviewPage
  },
  {
  path: '/tab1',
  component: Tab1Page
  },
  {
    path: '/tab3',
    component: Tab3Page
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewPageRoutingModule {}
