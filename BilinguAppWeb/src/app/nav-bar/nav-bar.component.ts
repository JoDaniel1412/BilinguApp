import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {IUserDetailed} from '../models/home-view-models';
import {User} from '../../data/home-view-sample';
import {ProfileComponent} from '../modals/profile/profile.component';
import {HomeViewService} from '../services/home-view.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  userEmail = '';
  private userDetailed: IUserDetailed;

  constructor(private router: Router,
              private authService: AuthService,
              private homeViewService: HomeViewService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.userDetailed = User;
    this.authService.signedIn.subscribe(user => {
      if (user) {
        this.userEmail = user.email;
      }
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  goAdmin() {
    this.router.navigate(['/admin']);
  }

  editProfile() {
    // Gets user id
    this.authService.signedIn.subscribe(user => {
      if (user) {
        console.log('Edit profile of:', user);
        // Gets user data
        this.homeViewService
          .getUser(user.uid)
          .subscribe(result => {
            console.log('User profile data:', result);
            if (result.length < 1) { return; }
            this.userDetailed = result[0][0];
            // Opens dialog
            this.dialog.open(ProfileComponent, {
              width: '400px',
              data: this.userDetailed
            });
        });
      }
    });
  }

  signOut() {
    this.userEmail = '';
    this.authService.signOut();
    this.router.navigate(['/auth']);
  }

  isUser() {
    return this.authService.authState;
  }
}
