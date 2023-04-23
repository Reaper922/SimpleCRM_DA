import { Injectable } from '@angular/core';
import { CollectionReference, Firestore, collection, collectionData, deleteDoc, doc, getDoc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User, UserData } from './models/user.class';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dbRef!: CollectionReference;
  private userDb!: Observable<UserData[]>;

  constructor(private firestore: Firestore) {
    this.dbRef = collection(firestore, 'users');
    this.userDb = collectionData(this.dbRef, { idField: 'id' }) as Observable<UserData[]>;
  }

  getUserDB(): Observable<UserData[]> {
    return this.userDb;
  }

  createUser(userObj: User): Promise<any> {
    return setDoc(doc(this.dbRef), userObj.toJson());
  }

  getUser(userId: string): Promise<any> {
    return getDoc(doc(this.dbRef, userId));
  }

  updateUser(userId: string, userObj: User): Promise<any> {
    return updateDoc(doc(this.dbRef, userId), userObj.toJson());
  }

  deleteUser(userId: string): Promise<any> {
    return deleteDoc(doc(this.dbRef, userId));
  }
}
