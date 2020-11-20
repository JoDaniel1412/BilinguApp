import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {UserDetailsComponent} from '../modals/user-details/user-details.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {IUserDetailed} from '../models/home-view-models';
import {User} from '../../data/home-view-sample';
import {ProfileComponent} from '../modals/profile/profile.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  private userDetailed: IUserDetailed;

  constructor(private router: Router,
              private authService: AuthService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userDetailed = User;
  }

  goHome() {
    this.router.navigate(['/']);
  }

  editProfile() {
    this.dialog.open(ProfileComponent, {
      width: '400px',
      data: this.userDetailed
    });
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/auth']);
  }

  isUser() {
    return this.authService.authState;
  }
}
