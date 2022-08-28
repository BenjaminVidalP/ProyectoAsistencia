import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRasistenciaPageRoutingModule } from './qrasistencia-routing.module';

import { QRasistenciaPage } from './qrasistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRasistenciaPageRoutingModule
  ],
  declarations: [QRasistenciaPage]
})
export class QRasistenciaPageModule {}
