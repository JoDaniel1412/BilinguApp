import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Countries} from '../../data/home-view-sample';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  countries: string[];
  hide = true;
  sex = ['Male', 'Female', 'Other'];

  constructor(private formBuilder: FormBuilder) {
    this.countries = Countries;
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      birthDate: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      country: ['', Validators.required],
      sex: ['', Validators.required]
    });
  }

}
