import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { Store } from '@ngrx/store';
import { State } from './store';
import { CheckUser } from './store/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'thesis';

  constructor(
    private store: Store<State>,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'google',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/google.svg'));
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/github.svg'));
    iconRegistry.addSvgIcon(
      'frontway',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/frontway.svg'));
    iconRegistry.addSvgIcon(
      'idea',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/idea.svg'));
  }

  ngOnInit() {
    this.store.dispatch(new CheckUser());
  }
}
