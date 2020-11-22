import { Component, OnInit } from '@angular/core';
import {IUserSimplify} from '../models/home-view-models';
import {HomeViewService} from '../services/home-view.service';
import {Users} from '../../data/home-view-sample';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.sass']
})
export class HomeViewComponent implements OnInit {

  showFilters: boolean;
  users: IUserSimplify[];

  constructor(private homeViewService: HomeViewService) {
    // this.users = Users;
  }

  ngOnInit(): void {
    this.fetchUsersOrigin();
  }

  fetchUsersOrigin() {
    this.homeViewService.getUsers().subscribe(data => {
      this.users = this.extractData(data);
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
