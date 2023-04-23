import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.scss']
})
export class DialogDeleteUserComponent {
  userId!: string;

  constructor(
    private dialogRef: MatDialogRef<DialogDeleteUserComponent>,
    private db: DatabaseService,
    private router: Router) { }

  closeDialog() {
    this.dialogRef.close();
  }

  deleteUser() {
    this.db.deleteUser(this.userId);
    this.dialogRef.close();
    this.router.navigateByUrl('user');
  }
}
