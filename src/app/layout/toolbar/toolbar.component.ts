import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { User } from '../../models/user.model';
import { Logout } from '../../store/user/user.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  user$: User;

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.store.select('user')
    .subscribe(data => {
      this.user$ = data;
    });
  }

  logoutUser() {
    this.store.dispatch(new Logout());
  }

  handleImgError(event) {
    event.target.src = '/assets/img/png/user.png';
  }

}
