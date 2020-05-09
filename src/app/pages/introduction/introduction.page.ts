import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  slideOpts = {
    speed: 400,
    initialSlide: 1
  };

  ngOnInit() {

  }

  navigateToHome() {
    this.router.navigateByUrl('home')
  }
}