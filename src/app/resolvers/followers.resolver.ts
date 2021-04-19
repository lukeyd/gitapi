import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class FollowersResolver implements Resolve<User[]> {
  constructor(private dataService: UserService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    let userName: string;
    userName = '';
    if (route.paramMap.get('user')){
      // tslint:disable-next-line:no-non-null-assertion
      userName = route.paramMap.get('user')!;
    }

    return this.dataService.Followers(userName);
  }
}
