import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private googlePlus: GooglePlus,
    private userService: UserService,
  ) { }

  // login with google using firebase
  async nativeGoogleLogin(path: string) {
    this.googlePlus.login({
      'webClientId': '1077237492199-bmga3td66gkh91vdflkanid7n4o46a5v.apps.googleusercontent.com',
      'offline': true
    })
    .then(res => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(() => {
        this.userService.addUserDetails(path)
      })
    })
  }

  // logout user from firebase
  logout() {
    if (confirm('Are you sure you want to logout?')) {
      firebase.auth().signOut()
      .then(() => {})
      .catch(err => {})
    }
  }
}