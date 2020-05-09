import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FeedbackPage } from './feedback.page';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: FeedbackPage
  }
];

@NgModule({
  declarations: [
    FeedbackPage
  ],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FeedbackPageModule {}
