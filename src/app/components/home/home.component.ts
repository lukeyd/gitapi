import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SearchResults } from 'src/app/interfaces/search-results';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users!: Observable<SearchResults>;
  public searchForm: FormGroup = new FormGroup({});
  public Page = 1;
  constructor(private dataService: SearchService, private form: FormBuilder){

  }

  ngOnInit(): void {
    this.searchForm = this.form.group({
      search: ['']
    });
  }

  public Search(): void {
    this.Page = 1;
    this.users = this.dataService.User(this.searchForm.controls.search.value, this.Page);
  }

  public Previous(): void {
    this.Page--;
    if (this.Page < 1){
      this.Page = 1;
    }
    this.users = this.dataService.User(this.searchForm.controls.search.value, this.Page);
  }

  public Next(): void {
    this.Page++;

    console.log(this.Page);
    this.users = this.dataService.User(this.searchForm.controls.search.value, this.Page);
  }
}
