import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  rating = 0;
  starCount = 5;
  starColor = '#FFEB3B';
  text = '';
  uid: string;
  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(
    private readonly afs: AngularFirestore,
    private af: AngularFireAuth,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.itemsCollection = this.afs.collection<any>('feedback');
    this.af.authState.subscribe(data => this.uid = data.uid);
  }

  onRatingChanged(rating) {
    this.rating = rating;
  }

  saveFeedback() {
    if (this.text !== '' && this.rating !== 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      this.itemsCollection.add({
        rating: this.rating,
        text: this.text,
        uid: this.uid,
        timestamp
      });
      this.openSnackBar('Bewertung erfolgreich gesendet!');
      this.router.navigate(['/history']);
    } else {
      this.openSnackBar('Bitte Bewertung abgeben und Kommentarfeld ausfüllen!');
    }
  }

  openSnackBar(text: string) {
   this.snackBar.open(text, '', {
     duration: 3000,
   });
 }

}
