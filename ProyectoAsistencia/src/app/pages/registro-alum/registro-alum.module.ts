import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroAlumPageRoutingModule } from './registro-alum-routing.module';

import { RegistroAlumPage } from './registro-alum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroAlumPageRoutingModule
  ],
  declarations: [RegistroAlumPage]
})
export class RegistroAlumPageModule {}
