import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab1Page } from '../tab1/tab1.page';
import { ChallengePage } from './challenge.page';

const routes: Routes = [
  {
    path: '',
    component: ChallengePage
  },
{
  path: '/tab1',
  component: Tab1Page
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengePageRoutingModule {}
