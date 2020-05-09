import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login-core',
  templateUrl: './login-core.page.html',
  styleUrls: ['./login-core.page.scss'],
})
export class LoginCorePage implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  @Input() path: string;

  ngOnInit() {

  }

  // calling google login method from authentication service
  loginWithGoogle() {
    this.authenticationService.nativeGoogleLogin(this.path)
  }

  // skip login for now is pressed
  navigateToHome() {
    this.router.navigateByUrl('home');
  }
}