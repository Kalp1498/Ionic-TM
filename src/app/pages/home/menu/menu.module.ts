import { MenuPage } from './menu.page';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MenuPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuPage
  ]
})
export class MenuPageModule {}
