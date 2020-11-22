import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {IUserDetailed} from '../../models/home-view-models';
import {HomeViewService} from '../../services/home-view.service';

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
              @Inject(MAT_DIALOG_DATA) public user: IUserDetailed,
              private homeViewService: HomeViewService) { }

  ngOnInit(): void {
    this.hobbies = this.user.hobbies;
    this.contacts = this.user.contact;
  }

  setStep(index: number) {
    this.step = index;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calculateAge(birthday: string) {
    const today = new Date();
    const date = new Date(birthday);
    return today.getFullYear() - date.getFullYear();
  }

  saveData() {
    this.homeViewService.putUser(this.user.uid, this.hobbies, this.contacts)
      .subscribe(result => {
        console.log('Edited profile: ', result);
      });
  }
}
