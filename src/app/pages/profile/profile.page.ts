import * as firebase  from 'firebase';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private authenticationService: AuthenticationService
  ) { }

  user: firebase.User
  enableNotifications: boolean = true;

  ngOnInit() {
    this.angularFireAuth.authState.subscribe(value => {
      this.user = value;
    })
  }

  editProfile() {
    console.log('edit profile')
  }

  toggleNotifications() {
    if (this.enableNotifications) {
      alert('enabled')
    } else {
      alert('disabled')
    }
  }

  logOut() {
    this.authenticationService.logout()
  }
}
