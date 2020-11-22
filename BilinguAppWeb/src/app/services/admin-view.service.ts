import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IUsersLanguage, IUsersOrigin, IUsersPerCountry} from '../models/admin-view-models';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminViewService {

  private url = '';

  constructor(private http: HttpClient) { }

  getUsersOrigin(): Observable<IUsersOrigin[][]>{
    const path = environment.api + this.url + 'users_country';
    const params = new HttpParams();
    console.log(path, params);
    return this.http.get<IUsersOrigin[][]>(path, {params});
  }

  getUsersPerCountry(): Observable<IUsersPerCountry[][]> {
    const path = environment.api + this.url + 'users_per_country';
    const params = new HttpParams();
    console.log(path, params);
    return this.http.get<IUsersPerCountry[][]>(path, {params});
  }

  getUsersLearning(): Observable<IUsersLanguage[][]> {
    const path = environment.api + this.url + 'users_per_learning';
    const params = new HttpParams();
    console.log(path, params);
    return this.http.get<IUsersLanguage[][]>(path, {params});
  }

  getUsersTeaching(): Observable<IUsersLanguage[][]> {
    const path = environment.api + this.url + 'users_per_teaching';
    const params = new HttpParams();
    console.log(path, params);
    return this.http.get<IUsersLanguage[][]>(path, {params});
  }
}
