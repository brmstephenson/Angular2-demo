import { Component } from 'angular2/core';
import { Control } from 'angular2/common';
import { Beer } from './beer';
import { BeerService } from './beer.service';
import { BeerDetailComponent } from './br-detail.component'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'br-search',
  providers: [BeerService],
  directives: [BeerDetailComponent],
  template: `
      <div class="search">
        <h1>Search for Beer</h1>
        <input type="text" [ngFormControl]="term"/>
        <div *ngFor="#r of results | async" class="beer-item">
          <br-detail [beer]="r"></br-detail>
        </div>
      </div>
    `,
    styles: [`
      input {
        height: 30px;
        font-size: 1.2em;
      }
      .search {
        padding: 10px;
      }
      .beer-item {
        margin: 10px;
        border: 1px green solid;
        width: 500px;
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
  }
}