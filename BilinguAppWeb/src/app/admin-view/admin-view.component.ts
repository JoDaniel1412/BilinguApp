import { Component, OnInit } from '@angular/core';
import {IUsersLanguage, IUsersOrigin, IUsersPerCountry} from '../models/admin-view-models';
import {MatTableDataSource} from '@angular/material/table';
import {UsersLearning, UsersOrigin, UsersPerCountry, UsersTeaching} from '../../data/admin-view-sample';
import {AdminViewService} from '../services/admin-view.service';

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
  usersLearningCols = ['Language', '#Users'];
  usersTeachingCols = ['Language', '#Users'];

  constructor(private adminViewService: AdminViewService) {
    this.usersOrigin = new MatTableDataSource<IUsersOrigin>(UsersOrigin);
    this.usersPerCountry = new MatTableDataSource<IUsersPerCountry>(UsersPerCountry);
    this.usersLearning = new MatTableDataSource<IUsersLanguage>(UsersLearning);
    this.usersTeaching = new MatTableDataSource<IUsersLanguage>(UsersTeaching);
  }

  ngOnInit(): void {
    this.fetchUsersOrigin();
    this.fetchUsersPerCountry();
    this.fetchUsersLearning();
    this.fetchUsersTeaching();
  }

  fetchUsersOrigin() {
    this.adminViewService.getUsersOrigin().subscribe(data => {
      const extractData = this.extractData(data);
      const usersOrigin = [];
      extractData.forEach(value => {
        const newUser = {
          uid: value.uid,
          name: value.name,
          country: value.country.name
        };
        usersOrigin.push(newUser);
      });
      this.usersOrigin.data = usersOrigin;
    });
  }

  fetchUsersPerCountry() {
    this.adminViewService.getUsersPerCountry().subscribe(data => {
      this.usersPerCountry.data = this.extractData(data);
    });
  }

  fetchUsersLearning() {
    this.adminViewService.getUsersLearning().subscribe(data => {
      this.usersLearning.data = this.extractData(data);
    });
  }

  fetchUsersTeaching() {
    this.adminViewService.getUsersTeaching().subscribe(data => {
      this.usersTeaching.data = this.extractData(data);
    });
  }

  private extractData(data: any[]) {
    const result = [];
    data.forEach(value => {
      result.push(value[0]);
    });
    return result;
  }
}
