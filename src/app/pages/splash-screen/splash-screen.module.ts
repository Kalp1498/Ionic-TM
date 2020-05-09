import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SplashScreenPage } from './splash-screen.page';

const routes: Routes = [
  {
    path: '',
    component: SplashScreenPage
  }
];

@NgModule({
  declarations: [
    SplashScreenPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SplashScreenPageModule {}
