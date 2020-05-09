import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionPage } from './introduction.page';
import { LoginCorePageModule } from 'src/app/core/login-core/login-core.module';

const routes: Routes = [
  {
    path: '',
    component: IntroductionPage
  }
];

@NgModule({
  declarations: [
    IntroductionPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    LoginCorePageModule,
    RouterModule.forChild(routes)
  ]
})
export class IntroductionPageModule {}
