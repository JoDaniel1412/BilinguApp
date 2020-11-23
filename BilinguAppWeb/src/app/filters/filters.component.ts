import { Component, OnInit } from '@angular/core';
import {ILanguage} from '../models/home-view-models';
import {Countries, Learning, Teaching} from '../../data/home-view-sample';
import {HomeViewService} from '../services/home-view.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit {

  learning: ILanguage[];
  teaching: ILanguage[];
  countries: string[];

  constructor(private homeViewService: HomeViewService,
              private authService: AuthService) { }

  ngOnInit(): void {
    // this.learning = Learning;
    // this.teaching = Teaching;
    this.fetchFilters();
    this.countries = Countries;
  }

  fetchFilters() {
    this.authService.signedIn.subscribe(user => {
      this.homeViewService
        .getUser(user.uid)
        .subscribe(userData => {
          console.log('User data for filters: ', userData);
          if (userData.length < 1) { return; }

          this.learning = userData[0][0].learning;
          this.teaching = userData[0][0].teaching;
        });
    });
  }

}
