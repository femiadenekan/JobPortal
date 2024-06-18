import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private firestore: AngularFirestore) {}

  getJobs(): Observable<any> {
    return this.firestore.collection('jobs').valueChanges({ idField: 'id' });
  }

  addJob(job: any): Promise<any> {
    return this.firestore.collection('jobs').add(job);
  }

  updateJob(id: string, job: any): Promise<void> {
    return this.firestore.doc(`jobs/${id}`).update(job);
  }

  deleteJob(id: string): Promise<void> {
    return this.firestore.doc(`jobs/${id}`).delete();
  }
}
