import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.checkFirstTime() // after 4 seconds check whether app is opened for first time or not
    }, 4000);
  }

  checkFirstTime() {
    this.storage.get('firstTime').then(val => {
      if (val === null) { // app is opened for first time
        this.storage.set('firstTime', 'no')
        this.router.navigateByUrl('/introduction')
      } else { // app is not opened for first time
        this.router.navigateByUrl('/home')
      }
    })
  }
}