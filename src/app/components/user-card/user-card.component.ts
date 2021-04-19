import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input()
  UserInfo!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
