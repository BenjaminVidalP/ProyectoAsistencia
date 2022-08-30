import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperacionClavePageRoutingModule } from './recuperacion-clave-routing.module';

import { RecuperacionClavePage } from './recuperacion-clave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperacionClavePageRoutingModule
  ],
  declarations: [RecuperacionClavePage]
})
export class RecuperacionClavePageModule {}
