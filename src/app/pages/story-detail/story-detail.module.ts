import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { StoryDetailPage } from './story-detail.page';
import { Routes, RouterModule } from '@angular/router';
import { SpinnerPageModule } from 'src/app/core/spinner/spinner.module';

const routes: Routes = [
  {
    path: '',
    component: StoryDetailPage
  }
];

@NgModule({
  declarations: [
    StoryDetailPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    SpinnerPageModule,
    RouterModule.forChild(routes)
  ]
})
export class StoryDetailPageModule {}
