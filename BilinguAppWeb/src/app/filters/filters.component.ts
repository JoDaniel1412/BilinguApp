import { Component, OnInit } from '@angular/core';
import {ILanguage} from '../models/home-view-models';
import {Countries, Learning, Teaching} from '../../data/home-view-sample';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit {

  learning: ILanguage[];
  teaching: ILanguage[];
  countries: string[];

  constructor() { }

  ngOnInit(): void {
    this.learning = Learning;
    this.teaching = Teaching;
    this.countries = Countries;
  }

}
