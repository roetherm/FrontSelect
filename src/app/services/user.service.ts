import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import 'firebase/firestore';

import { auth } from 'firebase/app';
import { Observable, pipe, Subscription, from } from 'rxjs';
import { catchError, map, mergeMap, switchMap, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    public afAuth: AngularFireAuth,
    public afDB: AngularFirestore,
  ) { }

  checkUser(): Observable<any> {
    return from(
      this.afAuth.authState
    );
  }

  loginUser(): Observable<any> {
    console.log('loginUser');
    return from(
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((snapshot) => {
        return snapshot;
      })
      .catch((error) => {
        console.log(error);
      })
    );
  }

  getUserdata(uid: string): Observable<any> {
    console.log('lets get userData');
    return this.afDB
      .collection<any>('users', ref => ref.where('uid', '==', uid).limit(1))
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          console.log(data);
          if (data.key !== '') {
            return data;
          }
        }))
      );
  }

  logoutUser(): Observable<any> {
    console.log('Okay, we are logging out');
    return from(
      this.afAuth.auth.signOut()
      .catch((error) => {
        console.log(error);
      })
    );
  }

}