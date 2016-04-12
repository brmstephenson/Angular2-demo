import {Component, OnInit} from "angular2/core";
import { BeerService } from "./beer.service";
import { SearchPipe } from "./search.pipe";
import { Beer } from './beer';

@Component({
    selector: "br-app",
    providers: [BeerService],
    pipes: [SearchPipe],
    styles: [`
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
      .name {
        color: brown;
      }
      .selected {
        background-color: #FBB117;
      }
    `],
    template: `
      <h1>Beer life is the life for me</h1>
      <input type="text" [(ngModel)]="query"/>
      <ul class="beer" *ngIf="beer">
        <li *ngFor="#b of beer | search: query"
            class="beer-item" 
            (click)="selectBeer(b)" 
            [class.selected]="b === selectedBeer">
          <div class="name">Name: {{b.name}}</div>
          <div class="brewery">Brewery: {{b.brewery}}</div>
          <div class="type">Type: {{b.type}}</div>
          <div class="abv">Abv: {{b.abv}}%</div>
          <div class="ibu">Ibu: {{b.ibu}}</div>
          <!--<div class="description">Description: {{b.description}}</div>-->
        </li>
      </ul>
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
