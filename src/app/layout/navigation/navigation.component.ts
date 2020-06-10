import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isAdmin;

  constructor() { }

  ngOnInit() {
    auth().currentUser.getIdTokenResult()
    .then((idTokenResult) => {
       // Confirm the user is an Admin.
       if (!!idTokenResult.claims.admin) {
         // Show admin UI.
         this.isAdmin = true;
       } else {
         // Show regular user UI.
         this.isAdmin = false;
       }
    })
    .catch((error) => {
      console.log(error);
    });
  }

}
