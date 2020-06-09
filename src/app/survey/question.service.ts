import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { catchError, map, mergeMap, switchMap, flatMap } from 'rxjs/operators';
import { Observable, pipe, Subscription, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(private afs: AngularFirestore) { }

  getItems() {
    this.itemsCollection = this.afs.collection('questions', ref => ref.orderBy('id'));
    return this.items = this.itemsCollection.valueChanges();
  }

  getQuestion(questionId: number) {
    return this.afs.collection('questions', ref => ref.where('id', '==', questionId).limit(1))
    .snapshotChanges()
    .pipe(
      map(actions => actions.map((a: any) => {
        const dataset = a.payload.doc.data();
        const key = a.payload.doc.id;
        console.log(dataset);
        console.log(key);
        return { key, ...dataset };
      }))
    );

  }

  saveQuestion(question: any) {
    return this.afs.collection('questions')
    .doc(question.key)
    .update({
      id: question.id,
      headline: question.headline,
      help: question.help,
      reverse: question.reverse,
      question: question.question
    });
  }
}
