import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {IUserDetailed} from '../../models/home-view-models';

/**
 * ref: https://www.freakyjolly.com/angular-material-modal-popup-example/#.X6eL7hvPyUk
 */
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass']
})
export class UserDetailsComponent {

  constructor(
    public dialogRef: MatDialogRef<UserDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public user: IUserDetailed) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calculateAge(birthday: string) {
    const today = new Date();
    const date = new Date(birthday);
    return today.getFullYear() - date.getFullYear();
  }
}
