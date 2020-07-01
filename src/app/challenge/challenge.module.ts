import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengePageRoutingModule } from './challenge-routing.module';

import { ChallengePage } from './challenge.page';

@NgModule({
  imports: [ 
    MbscModule, 
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengePageRoutingModule
  ],
  declarations: [ChallengePage]
})
export class ChallengePageModule {}
