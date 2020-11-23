import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ICountry, ILanguage, IUserDetailed, IUserSimplify} from '../models/home-view-models';

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

  getUsers(learning: ILanguage[] = [],
           teaching: ILanguage[] = [],
           country: ICountry[] = [],
           age: number[] = [0, 99])
    : Observable<IUserSimplify[][]> {
    const path = environment.api + this.url + 'users';
    const params = new HttpParams()
      .append('learning', JSON.stringify(learning))
      .append('teaching', JSON.stringify(teaching))
      .append('country', JSON.stringify(country))
      .append('age', JSON.stringify(age));
    console.log(path, params);
    return this.http.get<IUserSimplify[][]>(path, {params});
  }
}
