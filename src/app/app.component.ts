import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SearchResults } from './interfaces/search-results';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gitusers';
  public users!: Observable<SearchResults>;
  public searchForm: FormGroup = new FormGroup({});
  constructor(private dataService: SearchService, private form: FormBuilder){

  }

  ngOnInit(): void {
    this.searchForm = this.form.group({
      search: ['']
    });
  }

  public Search(): void {
    this.users = this.dataService.User(this.searchForm.controls.search.value);
  }

}
