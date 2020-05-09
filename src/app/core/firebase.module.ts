import * as firebase from 'firebase';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

firebase.initializeApp(environment.firebaseConfig)

@NgModule({
  imports: [
    AngularFireAuthModule, 
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  exports: [
    AngularFireAuthModule, 
    AngularFireDatabaseModule,
  ]
})
export class FirebaseModule { }
