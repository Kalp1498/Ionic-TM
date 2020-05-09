import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { StoryListPage } from './story-list.page';
import { SpinnerPageModule } from 'src/app/core/spinner/spinner.module';

@NgModule({
  declarations: [
    StoryListPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    SpinnerPageModule
  ],
  exports: [
    StoryListPage
  ]
})
export class StoryListPageModule {}
