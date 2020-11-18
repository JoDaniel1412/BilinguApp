import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Countries} from '../../data/home-view-sample';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent implements OnInit {

  formGroup: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
