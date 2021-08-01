import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private firestore: AngularFirestore) { }

  addNotes(notes: any): Promise<any> {
    return this.firestore.collection('notes').add(notes);
  }

  getNotes(): Observable<any> {
    return this.firestore.collection('notes', ref => ref.orderBy('date', 'asc')).snapshotChanges();
  }

  //Delete

  deleteNotes(id: string): Promise<any> {
    return this.firestore.collection('notes').doc(id).delete();
  }

  //edit

  getNote(id: string): Observable<any>{
    return this.firestore.collection('notes').doc(id).snapshotChanges();
  }

  updateNote(id: string, data: any): Promise<any>{
    return this.firestore.collection('notes').doc(id).update(data);
  }
}
