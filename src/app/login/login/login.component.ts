import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  email = '';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    console.log(this.email + ' - ' + this.password);
  }

}
