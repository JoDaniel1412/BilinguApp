import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Languages} from '../../data/auth-sample';
import {ILanguage} from '../models/home-view-models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-language-panel',
  templateUrl: './language-panel.component.html',
  styleUrls: ['./language-panel.component.sass']
})
export class LanguagePanelComponent implements OnInit {

  @Input() title = '';
  @Input() description = '';
  @Input() expanded = false;

  @Output() openEmitter = new EventEmitter();
  @Output() formEmitter = new EventEmitter< ILanguage[]>();

  language: ILanguage[];
  formGroup: FormGroup;

  fields = 1;
  languages: string[];
  levels: string[];

  constructor(private formBuilder: FormBuilder) {
    this.languages = Languages;
    this.levels = ['starter', 'amateur', 'advanced'];
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(this.controlConfig());
    this.updatedForm();
  }

  AddRemoveFields(value: number) {
    this.fields += value;
    if (this.fields > 3) { this.fields = 3; }
    if (this.fields < 1) { this.fields = 1; }

    this.formGroup = this.formBuilder.group(this.controlConfig());
    this.updatedForm();
  }

  updatedForm() {
    this.formGroup.valueChanges.subscribe(value => {
      this.formEmitter.emit(this.formatGroup(value));
    });
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  controlConfig() {
    let config: any;
    switch (this.fields) {
      default:
        config = {
          language0: ['', Validators.required],
          level0: ['', Validators.required],
        };
        break;
      case 2:
        config = {
          language0: ['', Validators.required],
          level0: ['', Validators.required],
          language1: ['', Validators.required],
          level1: ['', Validators.required],
        };
        break;
      case 3:
        config = {
          language0: ['', Validators.required],
          level0: ['', Validators.required],
          language1: ['', Validators.required],
          level1: ['', Validators.required],
          language2: ['', Validators.required],
          level2: ['', Validators.required],
        };
        break;
    }
    return config;
  }

  formatGroup(value: any) {
    const result: ILanguage[] = [];
    result.push({name: value.language0, level: value.level0});
    if (this.fields > 1) {
      result.push({name: value.language1, level: value.level1});
    }
    if (this.fields > 2) {
      result.push({name: value.language2, level: value.level2});
    }
    return result;
  }

}
