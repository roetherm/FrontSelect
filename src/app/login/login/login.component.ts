import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn, bounceOut, fadeIn, fadeOut } from 'ng-animate';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from '../../models/user.model';

import { Store } from '@ngrx/store';
import { State } from '../../store';
import { GoogleLogin, Logout, Login } from '../../store/user/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(bounceIn, {})),
      transition('* => void', useAnimation(bounceOut, {}))
    ]),
    trigger('fade', [
      transition('void => *', useAnimation(fadeIn, {})),
      transition('* => void', useAnimation(fadeOut, {}))
    ])
  ],
})
export class LoginComponent implements OnInit {
  // States
  loading = true;
  // Data
  user$: User;
  // Hides the password
  hide = true;
  // Login credentials
  email = '';
  password = '';
  // Redirector
  counter = 5;

  constructor(
    private spinner: NgxSpinnerService,
    private store: Store<State>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.select('user').subscribe(data => {
      this.user$ = data;
      if (data.loading) {
        this.spinner.show();
      } else {
        this.spinner.hide();
        if (this.user$.uid !== '') {
          const countdown = setInterval(() => {
            this.counter --;
            if (this.counter === 0) {
              clearInterval(countdown);
              this.router.navigate(['/', 'survey']);
              this.counter = 5;
            }
          }, 1000);
        }
      }
    });
  }

  handleClick() {
    console.log(this.email + ' - ' + this.password);
  }

  handleContinue() {
    this.router.navigate(['/survey']);
  }

  loginUser() {
    this.store.dispatch(new GoogleLogin());
  }

  loginUserNormal() {
    const data = {
      email: this.email,
      password: this.password
    };
    this.store.dispatch(new Login(data));
  }

  logoutUser() {
    this.store.dispatch(new Logout());
  }

  googleLogin() {
    setTimeout(() => {
      this.router.navigate(['/', 'survey']);
    }, 1000);
  }

  handleImgError(event) {
    event.target.src = '/assets/img/png/user.png';
  }

}
