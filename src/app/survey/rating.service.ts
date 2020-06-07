import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AngularFireFunctions } from '@angular/fire/functions';


@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(
  private fns: AngularFireFunctions,
) { }

  sendData(data: any) {
    const callable = this.fns.httpsCallable('RateData');
    return callable({
      data
    });
  }
}
