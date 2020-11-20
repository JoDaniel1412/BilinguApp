import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ILanguage} from '../models/home-view-models';

@Component({
  selector: 'app-chips-panel',
  templateUrl: './chips-panel.component.html',
  styleUrls: ['./chips-panel.component.sass']
})
export class ChipsPanelComponent implements OnInit {

  @Input() title = '';
  @Input() description = '';
  @Input() expanded = false;
  @Input() options: string[];
  @Input() editable = false;
  @Input() placeholder = 'example';

  @Output() openEmitter = new EventEmitter();
  @Output() formEmitter = new EventEmitter<string[]>();

  visible = true;
  selectable: boolean;
  removable: boolean;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() { }

  ngOnInit(): void {
    this.removable = this.editable;
    this.selectable = this.editable;
    this.formEmitter.emit(this.options);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.options.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.formEmitter.emit(this.options);
  }

  remove(option: string): void {
    const index = this.options.indexOf(option);

    if (index >= 0) {
      this.options.splice(index, 1);
    }
    this.formEmitter.emit(this.options);
  }

}
