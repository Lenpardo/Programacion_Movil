import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoUserPageRoutingModule } from './nuevo-user-routing.module';

import { NuevoUserPage } from './nuevo-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoUserPageRoutingModule
  ],
  declarations: [NuevoUserPage]
})
export class NuevoUserPageModule {}
