import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Countries} from '../../data/home-view-sample';
import {Router} from '@angular/router';
import {ILanguage, IUserDetailed} from '../models/home-view-models';
import {AuthService} from '../services/auth.service';
import {Contacts, Hobbies, Sex} from '../../data/auth-sample';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  learningLanguage: ILanguage[];
  teachingLanguage: ILanguage[];
  hobbiesFormGroup: string[];
  contactsFormGroup: string[];

  countries: string[];
  hide = true;
  sex: string [];
  hobbies: string[];
  contacts: string[];

  step = 0;
  authSuccess = false;
  authError = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) {
    this.countries = Countries;
    this.sex = Sex;
    this.learningLanguage = [];
    this.teachingLanguage = [];
    this.hobbies = Hobbies;
    this.contacts = Contacts;
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      birthDate: ['', Validators.required],
      country: ['', Validators.required],
      sex: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({});
  }

  setStep(index: number) {
    this.step = index;
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  async createAccount() {
    const userFF = this.firstFormGroup.getRawValue();
    const user: IUserDetailed = {
      uid: '',
      age: userFF.birthDate,
      country: userFF.country,
      name: userFF.name,
      sex: userFF.sex,
      learning: this.learningLanguage,
      teaching: this.teachingLanguage,
      contact: this.contactsFormGroup,
      hobbies: this.hobbiesFormGroup
    };

    await this.authService.createAccount(userFF.email, userFF.password, user);
  }

  async signIn(email: string, password: string) {
    try {
      this.authSuccess = false;
      const result = await this.authService.signIn(email, password);
      console.log('sign in', result);
      if (result) { this.authSuccess = true; }
      else { throw new Error('Sign-in failed'); }
    } catch (error) {
      console.log(error);
      this.authError = true;
    }
  }
}
