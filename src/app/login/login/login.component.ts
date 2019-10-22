import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn, bounceOut, fadeIn, fadeOut } from 'ng-animate';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from '../../models/user.model';

import { Store } from '@ngrx/store';
import { State } from '../../store';
import { GoogleLogin, Logout } from '../../store/user/user.actions';

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
  user$: User;
  // Hides the password
  hide = true;
  email = '';
  password = '';
  loading = true;

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
        }
        // if (data.key !== '') {
        //   this.user$ = data;
        //   this.router.navigate(['/estimation']);
        // } else {
        //   this.user$ = undefined;
        // }
      });
    }

  handleClick() {
    console.log(this.email + ' - ' + this.password);
  }

  loginUser() {
    this.store.dispatch(new GoogleLogin());
  }

  logoutUser() {
  this.store.dispatch(new Logout());
}

  googleLogin() {
    setTimeout(() => {
      this.router.navigate(['/', 'survey']);
    }, 1000);
  }

}
