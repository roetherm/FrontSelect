import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FrameworkService {

  subData: any;

  constructor(private afs: AngularFirestore) { }

  getFramework(frameworkName: string) {
    return this.afs.collection('frameworks', ref => ref.where('name', '==', frameworkName).limit(1))
    .snapshotChanges()
    .pipe(
      map((actions: any) => actions.map((a: any) => {
        const dataset = a.payload.doc.data();
        const key = a.payload.doc.id;
        return { key, ...dataset };
      }))
    );
  }

  getSubCollection(frameworkKey: string, questionId: number) {
    return this.afs.collection('frameworks')
      .doc(frameworkKey)
      .collection('parameter', ref => ref.where('id', '==', questionId).limit(1))
      .snapshotChanges()
      .pipe(
        map((actions: any) => actions.map((a: any) => {
          const dataset = a.payload.doc.data();
          const key = a.payload.doc.id;
          this.subData = { key, ...dataset };
          return { key, ...dataset };
        }))
      );
  }

  getFrameworkKey(frameworkName: string) {
      return this.afs.collection('frameworks', ref => ref.where('name', '==', frameworkName).limit(1))
      .snapshotChanges()
      .pipe(
        map((actions: any) => actions.map((a: any) => {
          const key = a.payload.doc.id;
          return { key };
        }))
      );
  }

  saveFramework(key: string, data: any) {
    if (data.key) {
      return this.afs.collection('frameworks')
      .doc(key)
      .collection('parameter')
      .doc(data.key)
      .update({
        id: data.id,
        text: data.text,
        name: data.name,
        grade: data.grade
      })
      .catch(err => console.log(err));
    } else {
      return this.afs.collection('frameworks')
      .doc(key)
      .collection('parameter')
      .add({
        id: data.id,
        text: data.text,
        name: data.name,
        grade: data.grade
      })
      .catch(err => console.log(err));
    }
  }

}
