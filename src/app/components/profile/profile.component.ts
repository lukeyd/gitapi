import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchResults } from 'src/app/interfaces/search-results';
import { User } from 'src/app/interfaces/user';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public followers!: User[];
  public following!: User[];
  public Profile!: User;
  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.followers = this.route.snapshot.data.followers;
    this.following = this.route.snapshot.data.following;
    this.Profile = this.route.snapshot.data.profile;
  }


}
