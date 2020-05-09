import { NgModule } from '@angular/core';
import { AboutPage } from './about.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AboutPage
  }
];

@NgModule({
  declarations: [
    AboutPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutPageModule {}
