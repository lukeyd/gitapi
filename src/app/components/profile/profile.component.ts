import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SearchResults } from 'src/app/interfaces/search-results';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public users!: Observable<SearchResults>;
  public searchForm: FormGroup = new FormGroup({});
  constructor(private dataService: SearchService, private form: FormBuilder){

  }

  ngOnInit(): void {

  }


}
