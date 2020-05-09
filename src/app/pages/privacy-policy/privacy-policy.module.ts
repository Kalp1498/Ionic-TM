import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyPolicyPage } from './privacy-policy.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPolicyPage
  }
];

@NgModule({
  declarations: [
    PrivacyPolicyPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PrivacyPolicyPageModule {}
