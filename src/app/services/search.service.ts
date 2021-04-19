import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import {HttpClient, HttpParams} from '@angular/common/http';
import { SearchResults } from '../interfaces/search-results';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // tslint:disable-next-line:no-inferrable-types
  private url: string = 'https://api.github.com/search';
  constructor(private http: HttpClient) { }


  public User(user: string, pageNumber: number): Observable<SearchResults> {
    const userUrl: string = this.url + '/users';

    const p = new HttpParams().set('q', user);


    return this.http.get<SearchResults>(userUrl, {params: {q: user, page: pageNumber.toString()}});

  }
}
