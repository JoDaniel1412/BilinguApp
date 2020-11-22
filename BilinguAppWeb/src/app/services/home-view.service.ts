import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {IUserDetailed, IUserSimplify} from '../models/home-view-models';

@Injectable({
  providedIn: 'root'
})
export class HomeViewService {

  private url = '';

  constructor(private http: HttpClient) { }

  getUser(uid: string): Observable<IUserDetailed[][]>{
    const path = environment.api + this.url + 'user/detailed/' + uid;
    const params = new HttpParams();
    console.log(path, params);
    return this.http.get<IUserDetailed[][]>(path, {params});
  }

  getUsers(learning: string[] = [],
           teaching: string[] = [],
           country: string = '',
           age: number[] = [0, 99])
    : Observable<IUserSimplify[][]> {
    const path = environment.api + this.url + 'users ';
    const params = new HttpParams()
      .append('learning', learning.toString())
      .append('teaching', teaching.toString())
      .append('country', country)
      .append('age', age.toString());
    console.log(path, params);
    return this.http.get<IUserSimplify[][]>(path, {});
  }

  putUser(uid: string, hobbies: string[], contact: string[]) {
    const path = environment.api + this.url + 'user/' + uid;
    const params = new HttpParams();
    console.log(path, params);
    return this.http.put(path, {hobbies, contact}, {params});
  }
}
