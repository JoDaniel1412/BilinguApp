import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent implements OnInit {

  formGroup: FormGroup;
  hide = true;
  signInFailed = false;
  userAuth: Subscription;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) {
    this.userAuth = this.authService.signedIn.subscribe((user) => {
      if (user) { this.goHome(); }
    });
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async signIn(fg: FormGroup) {
    try {
      this.signInFailed = false;
      if (!fg.valid) { throw new Error('Invalid sign-in credentials'); }
      const result = await this.authService.signIn(fg.value.email, fg.value.password);
      console.log('that tickles', result);
      if (result) { this.goHome(); }
      else { throw new Error('Sign-in failed'); }
    } catch (error) {
      console.log(error);
      this.signInFailed = true;
    }
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
