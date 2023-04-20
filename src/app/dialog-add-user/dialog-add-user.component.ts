import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.class';
import { CollectionReference, Firestore, collection, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  userDb!: CollectionReference;
  birthdate!: Date;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: Firestore
  ) {
    this.userDb = collection(firestore, 'users');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async save() {
    this.user.birthdate = this.birthdate.getTime();

    await setDoc(doc(this.userDb), this.user.toJson())
    .then(() => {
      console.log('User added');
    });
  }
}
