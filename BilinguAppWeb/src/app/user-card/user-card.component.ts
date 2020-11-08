import {Component, Input, OnInit} from '@angular/core';
import {IUserSimplify} from '../models/home-view-models';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass']
})
export class UserCardComponent implements OnInit {

  @Input() user: IUserSimplify;

  constructor() { }

  ngOnInit(): void {
  }

  userDetails() { }

}
