import { Component, OnInit } from '@angular/core';
import {ICountry, ILanguage, IUserSimplify} from '../models/home-view-models';
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
    this.fetchUsersOrigin({learning: [], teaching: [], country: [], age: [0, 99]});
  }

  fetchUsersOrigin(event: {
    learning: ILanguage[],
    teaching: ILanguage[],
    country: ICountry[],
    age: number[]}) {
    if (event) {
      console.log('Filters: ', event);
      this.homeViewService
        .getUsers(event.learning, event.teaching, event.country, event.age)
        .subscribe(data => {
          this.users = this.extractData(data);
        });
    }
    else {
      this.homeViewService.getUsers().subscribe(data => {
        this.users = this.extractData(data);
      });
    }
  }

  private extractData(data: any[]) {
    const result = [];
    data.forEach(value => {
      result.push(value[0]);
    });
    return result;
  }
}
