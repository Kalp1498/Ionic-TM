import { NgModule } from '@angular/core';
import { ProfilePage } from './profile.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FirebaseModule } from 'src/app/core/firebase.module';
import { LoginCorePageModule } from 'src/app/core/login-core/login-core.module';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    FirebaseModule,
    LoginCorePageModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfilePageModule {}
