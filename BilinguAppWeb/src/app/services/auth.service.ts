import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {IUserDetailed} from '../models/home-view-models';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

/**
 * Service that manages sign and log in of users
 * @source: https://dev.to/dobis32/user-authentication-with-angular-angularfire-3eja
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public signedIn: Observable<any>;
  public authState = false;

  constructor(public auth: AngularFireAuth,
              private http: HttpClient) {
    this.signedIn = new Observable((subscriber) => {
      this.auth.onAuthStateChanged(subscriber);
    });
    this.signedIn.subscribe(user => {
      if (user) { this.authState = true; }
    });
  }

  async signIn(email: string, password: string) {
    try {
      if (!email || !password) {
        throw new Error('Invalid email and/or password');
      }
      await this.auth.signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      console.log('Sign in failed', error);
      return false;
    }
  }

  async signOut() {
    try {
      await this.auth.signOut();
      return true;
    } catch (error) {
      console.log('Sign out failed', error);
      return false;
    }
  }

  async createAccount(email: string, password: string, userData: IUserDetailed) {
    try {
      if (!email || !password) {
        throw new Error('Invalid email and/or password');
      }
      // Create user on firebase
      await this.auth.createUserWithEmailAndPassword(email, password);
      // Create user on mongo
      const url = environment.api + 'user';
      console.log('mongo post: ', userData);
      const result = await this.http.post(url, userData);
      console.log(url, result);

      return false;
    } catch (error) {
      console.log('Sign up failed', error);
      return false;
    }
  }

  updateProfile(uid: string) {
    const path = environment.api + 'user';
    const params = new HttpParams().append('uid', uid);
    console.log(path, params);
    return this.http.put<IUserDetailed[]>(path, {params});
  }
}
