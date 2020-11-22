import {Component, Input, OnInit} from '@angular/core';
import {IUserDetailed, IUserSimplify} from '../models/home-view-models';
import {MatDialog} from '@angular/material/dialog';
import {UserDetailsComponent} from '../modals/user-details/user-details.component';
import {User} from '../../data/home-view-sample';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass']
})
export class UserCardComponent implements OnInit {

  @Input() user: IUserSimplify;
  private userDetailed: IUserDetailed;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userDetailed = User;
  }

  userDetails() {
    this.dialog.open(UserDetailsComponent, {
      width: '400px',
      data: this.userDetailed
    });
  }

}
