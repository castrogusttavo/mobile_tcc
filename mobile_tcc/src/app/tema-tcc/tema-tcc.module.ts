import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemaTccPageRoutingModule } from './tema-tcc-routing.module';

import { TemaTccPage } from './tema-tcc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemaTccPageRoutingModule
  ],
  declarations: [TemaTccPage]
})
export class TemaTccPageModule {}
