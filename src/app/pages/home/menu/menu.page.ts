import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from 'src/app/service/user.service';
import { ShareService } from 'src/app/service/share.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private shareService: ShareService,
    private angularFireAuth: AngularFireAuth,
    private authenticationService: AuthenticationService
  ) { }

  user: firebase.User;

  ngOnInit() {
    this.getCurrentUser()
  }

  // get current logged in user from firebase auth
  getCurrentUser() {
    this.angularFireAuth.authState.subscribe(user => {
      this.user = user
    })
  }

  navigateToProfile() {
    this.router.navigateByUrl('/profile')
  }

  navigateToYourStory() {
    this.router.navigateByUrl('/addstory');
  }

  // share app on different platforms
  shareApp() {
    this.shareService.options = {
      message: 'Share Thanks Mummy',
      subject: '',
      files: '',
      url: 'https://play.google.com/store',
      chooserTitle: ''
    }
    this.shareService.share()
  }

  navigateToRateUsHere() {
    this.userService.showRateUsHere.next('show')
  }

  navigateToFeedback() {
    this.router.navigateByUrl('feedback')
  }

  navigateToPrivacyPolicy() {
    this.router.navigateByUrl('privacy-policy')
  }

  navigateToAbout() {
    this.router.navigateByUrl('/about')
  }

  logout() {
    this.authenticationService.logout()
  }
}
