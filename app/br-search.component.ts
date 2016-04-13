import { Component } from 'angular2/core';
import { Control } from 'angular2/common';
import { Beer } from './beer';
import { BeerService } from './beer.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'br-search',
  providers: [BeerService],
  template: `
      <div class="search">
        <h1>Search for Beer</h1>
        <input type="text" [ngFormControl]="term"/>
        <div *ngFor="#r of results | async" (click)="clickMe()">{{r.name}}</div>
      </div>
    `,
    styles: [`
      .search {
        padding: 10px;
      }
    `]
})
export class BeerSearchComponent {
  results: Observable<Array <Beer>>;
  term = new Control();
  constructor(private beerService: BeerService) {
    this.results = this.term.valueChanges
                  .debounceTime(400)
                  .distinctUntilChanged()
                  .switchMap(term => this.beerService.search(term));
    console.log(this.results);
  }
  clickMe() {
    console.log(this.results);
  }
}