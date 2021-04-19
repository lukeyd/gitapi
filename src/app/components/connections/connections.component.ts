import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {

  @Input() Connections!: User[];
  @Input() Title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
