import {Component, OnInit} from "angular2/core";
import { BeerService } from "./beer.service";
import { SearchPipe } from "./search.pipe";
import { Beer } from './beer';
import { BeerDetailComponent } from './br-detail.component';

@Component({
    selector: "br-app",
    providers: [BeerService],
    directives: [BeerDetailComponent],
    pipes: [SearchPipe],
    styles: [`
      .home {
        padding: 10px;
      }
      .beer {
        list-style: none;
        padding: 0;
      }
      .beer-item{
        background-color: #CFCFCF;
        margin: 10px 0;
        width: 250px;
        cursor: pointer;
        padding: 5px;
      }
      .selected {
        background-color: #FBB117;
      }
    `],
    template: `
      <div class="home">
        <h1>Beer life is the life for me</h1>
        <input type="text" [(ngModel)]="query"/>
        <ul class="beer" *ngIf="beer">
          <li *ngFor="#b of beer | search: query"
              class="beer-item" 
              (click)="selectBeer(b)" 
              [class.selected]="b === selectedBeer">
              <br-detail [beer]="b"></br-detail>
          </li>
        </ul>
      </div>
    `
})

export class BeerAppComponent implements OnInit {
  beer: Beer[];
  errorMessage: any;
  selectedBeer: Beer;
  constructor(private _beerService: BeerService) {}
  ngOnInit() {this.getBeer()}
  getBeer() {
    this._beerService.getBeer()
      .subscribe(
      beer => this.beer = beer,
      error => this.errorMessage = <any>error);
  }
  selectBeer(b: Beer) {
    this.selectedBeer = b;
  }
}
