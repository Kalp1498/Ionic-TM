import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CategoryPage } from './category.page';

@NgModule({
  declarations: [
    CategoryPage
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CategoryPage
  ]
})
export class CategoryPageModule {}
