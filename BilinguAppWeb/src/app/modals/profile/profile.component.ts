import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {IUserDetailed} from '../../models/home-view-models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  hobbies: string[];
  contacts: string[];
  step = 0;

  constructor(public dialogRef: MatDialogRef<ProfileComponent>,
              @Inject(MAT_DIALOG_DATA) public user: IUserDetailed) { }

  ngOnInit(): void {
    this.hobbies = ['Movies', 'Video Games', 'Pets'];
    this.contacts = ['Skype', 'WhatsApp', 'BilinguApp', 'Person'];
  }

  setStep(index: number) {
    this.step = index;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
