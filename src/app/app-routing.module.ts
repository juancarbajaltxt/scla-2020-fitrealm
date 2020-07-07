import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./tabs/tabs.module').then(m => m.TabsPageModule);
    }
  },
  {
    path: 'timer-app',
    loadChildren: () => import('./timer-app/timer-app.module').then( m => m.TimerAppPageModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then( m => m.OverviewPageModule)
  },
  {
    path: 'challenge-new',
    loadChildren: () => import('./challenge-new/challenge-new.module').then( m => m.ChallengeNewPageModule)
  },
  {
    path: 'challenge-lower',
    loadChildren: () => import('./challenge-lower/challenge-lower.module').then( m => m.ChallengeLowerPageModule)
  },
  {
    path: 'challenge-upper',
    loadChildren: () => import('./challenge-upper/challenge-upper.module').then( m => m.ChallengeUpperPageModule)
  },
  {
    path: 'challenge-cardio',
    loadChildren: () => import('./challenge-cardio/challenge-cardio.module').then( m => m.ChallengeCardioPageModule)
  },
  { path: 'overview/tab1', redirectTo: 'tabs/tab1', pathMatch: 'full' },
 { path: 'tab1', loadChildren: '../tab1/tab1.module#Tab1PageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
