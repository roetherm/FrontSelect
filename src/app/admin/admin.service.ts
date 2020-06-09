import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
  private fns: AngularFireFunctions,
) { }

  makeAdmin(email: string) {
    const callable = this.fns.httpsCallable('MakeUserAdmin');
    return callable({
      email
    });
  }

}
