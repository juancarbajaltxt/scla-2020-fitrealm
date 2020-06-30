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
    path: 'challenge',
    loadChildren: () => import('./challenge/challenge.module').then( m => m.ChallengePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
