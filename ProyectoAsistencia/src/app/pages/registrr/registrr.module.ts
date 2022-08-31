import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrrPageRoutingModule } from './registrr-routing.module';

import { RegistrrPage } from './registrr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrrPageRoutingModule
  ],
  declarations: [RegistrrPage]
})
export class RegistrrPageModule {}
