import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { TimerAppPageRoutingModule } from './timer-app-routing.module';

import { TimerAppPage } from './timer-app.page';

@NgModule({
  imports: [ 
    MbscModule, 
    CommonModule,
    FormsModule,
    IonicModule,
    TimerAppPageRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  declarations: [TimerAppPage]
})
export class TimerAppPageModule {}
