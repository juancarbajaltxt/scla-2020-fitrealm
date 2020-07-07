import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewPage } from './overview.page';
import { Tab1Page } from '../tab1/tab1.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewPage
  },
  {
    path: 'tab1',
    component: Tab1Page
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewPageRoutingModule {}
