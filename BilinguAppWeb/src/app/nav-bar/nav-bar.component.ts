import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['/']);
  }

  editProfile() {
    this.router.navigate(['/profile']);
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/auth']);
  }
}
