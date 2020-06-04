import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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
}
