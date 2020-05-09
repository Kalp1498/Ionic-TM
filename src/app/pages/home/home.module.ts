import { HomePage } from './home.page';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoryPageModule } from './category/category.module';
import { MenuPageModule } from 'src/app/pages/home/menu/menu.module';
import { StoryListPageModule } from './story-list/story-list.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicModule,
    CommonModule,
    MenuPageModule,
    CategoryPageModule,
    StoryListPageModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule {}
