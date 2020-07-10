import { MbscModule } from '@mobiscroll/angular';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ChartsModule } from 'ng2-charts';
import { Tab3PageRoutingModule } from './tab3-routing.module'

@NgModule({
  imports: [ 
    MbscModule,  
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
    ChartsModule,
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}