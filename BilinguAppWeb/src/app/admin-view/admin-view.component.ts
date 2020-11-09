import { Component, OnInit } from '@angular/core';
import {IUsersLanguage, IUsersOrigin, IUsersPerCountry} from '../models/admin-view-models';
import {MatTableDataSource} from '@angular/material/table';
import {UsersLearning, UsersOrigin, UsersPerCountry, UsersTeaching} from '../../data/admin-view-sample';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.sass']
})
export class AdminViewComponent implements OnInit {

  usersOrigin: MatTableDataSource<IUsersOrigin>;
  usersPerCountry: MatTableDataSource<IUsersPerCountry>;
  usersLearning: MatTableDataSource<IUsersLanguage>;
  usersTeaching: MatTableDataSource<IUsersLanguage>;

  usersOriginCols = ['ID', 'Name', 'Country'];
  usersPerCountryCols = ['Country', '#Users'];
  usersLearningCols = ['Country', '#Users'];
  usersTeachingCols = ['Country', '#Users'];

  constructor() { }

  ngOnInit(): void {
    this.usersOrigin = new MatTableDataSource<IUsersOrigin>(UsersOrigin);
    this.usersPerCountry = new MatTableDataSource<IUsersPerCountry>(UsersPerCountry);
    this.usersLearning = new MatTableDataSource<IUsersLanguage>(UsersLearning);
    this.usersTeaching = new MatTableDataSource<IUsersLanguage>(UsersTeaching);
  }

  fetchUsersOrigin($event: { startDate: Date; endDate: Date; options?: string }) {

  }

  fetchUsersPerCountry($event: { startDate: Date; endDate: Date; options?: string }) {

  }

  fetchUsersLearning($event: { startDate: Date; endDate: Date; options?: string }) {

  }

  fetchUsersTeaching($event: { startDate: Date; endDate: Date; options?: string }) {

  }
}
