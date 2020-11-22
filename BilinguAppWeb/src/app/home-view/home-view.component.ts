import { Component, OnInit } from '@angular/core';
import {IUserSimplify} from '../models/home-view-models';
import {Users} from '../../data/home-view-sample';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.sass']
})
export class HomeViewComponent implements OnInit {

  showFilters: boolean;
  users: IUserSimplify[];

  constructor() { }

  ngOnInit(): void {
    this.users = Users;
  }

}
