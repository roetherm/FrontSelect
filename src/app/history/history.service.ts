import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private afs: AngularFirestore
  ) { }

  getItems(key: string) {
    return this.afs.collection('users')
    .doc(key)
    .collection('results')
    .valueChanges();
  }

}
