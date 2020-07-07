import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { OverviewPage } from '../overview/overview.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  
  {
    path: '/overview',
    component: OverviewPage,
  },
];

@NgModule({
  imports: [ 
    FormsModule,  
    MbscModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
