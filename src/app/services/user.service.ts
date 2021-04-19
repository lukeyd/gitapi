import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // tslint:disable-next-line:no-inferrable-types
  private url: string = 'https://api.github.com/users/';
  constructor(private http: HttpClient) { }


  public Followers(user: string): Observable<User[]> {
    const userUrl: string = this.url + user + '/followers';
    return this.http.get<User[]>(userUrl);
  }

  public Following(user: string): Observable<User[]> {
    const userUrl: string = this.url + user + '/following';
    return this.http.get<User[]>(userUrl);
  }

  public User(user: string): Observable<User> {
    const userUrl: string = this.url + user;
    return this.http.get<User>(userUrl);
  }

}
