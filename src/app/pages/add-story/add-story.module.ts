import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AddStoryPage } from './add-story.page';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerPageModule } from 'src/app/core/spinner/spinner.module';

const routes: Routes = [
  {
    path: '',
    component: AddStoryPage
  }
];

@NgModule({
  declarations: [
    AddStoryPage
  ],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    SpinnerPageModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AddStoryPageModule {}
