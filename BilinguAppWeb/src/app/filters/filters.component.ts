import {Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ICountry, ILanguage} from '../models/home-view-models';
import {Countries, Learning, Teaching} from '../../data/home-view-sample';
import {HomeViewService} from '../services/home-view.service';
import {AuthService} from '../services/auth.service';
import {NgModel} from '@angular/forms';
import {MatCheckbox} from '@angular/material/checkbox';
import {CountryISO} from '../../data/auth-sample';
import {MatSelect} from '@angular/material/select';
import {MatSlider} from '@angular/material/slider';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit {

  learning: ILanguage[];
  teaching: ILanguage[];
  countries: ICountry[];

  @ViewChildren('learningLanguage') learningList: QueryList<MatCheckbox>;
  @ViewChildren('teachingLanguage') teachingList: QueryList<MatCheckbox>;
  @ViewChild('country') countrySelected: MatSelect;
  @ViewChild('age') ageSelected: MatSlider;

  @Output() filterEmitter = new EventEmitter<{
    learning: ILanguage[],
    teaching: ILanguage[],
    country: ICountry[],
    age: number[]}>();

  constructor(private homeViewService: HomeViewService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.learning = Learning;
    this.teaching = Teaching;
    this.fetchFilters();
    this.countries = CountryISO;
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

  search() {
    const learning = [];
    const teaching = [];
    let country = [];
    let age: number[];

    this.learningList.forEach((checkBox, index) => {
      if (checkBox.checked) {
        learning.push(this.learning[index]);
      }
    });
    this.teachingList.forEach((checkBox, index) => {
      if (checkBox.checked) {
        teaching.push(this.teaching[index]);
      }
    });
    if (this.countrySelected.value) {
      country = this.countrySelected.value;
    }
    age = [this.ageSelected.min, this.ageSelected.value];

    this.filterEmitter.emit({learning, teaching, country, age});
  }
}
