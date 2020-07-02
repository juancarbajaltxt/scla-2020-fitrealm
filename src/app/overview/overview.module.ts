import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from '../tab3/tab3.page';
import { IonicModule } from '@ionic/angular';
import { OverviewPageRoutingModule } from './overview-routing.module';

import { OverviewPage } from './overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewPageRoutingModule,
    Tab3Page,
  ],
  declarations: [OverviewPage]
})
export class OverviewPageModule {}
