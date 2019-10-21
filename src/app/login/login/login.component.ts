import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn, bounceOut } from 'ng-animate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', useAnimation(bounceIn, {})),
      transition('* => void', useAnimation(bounceOut, {}))
    ])
  ],
})
export class LoginComponent implements OnInit {
  appearance = true;
  // Hides the password
  hide = true;
  email = '';
  password = '';

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  handleClick() {
    console.log(this.email + ' - ' + this.password);
  }

  googleLogin() {
    this.appearance = false;
    setTimeout(() => {
      this.router.navigate(['/', 'survey']);
    }, 1000);
  }

  githubLogin() {
    this.appearance = true;
  }

}
