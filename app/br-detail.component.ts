import { Component } from 'angular2/core';
import { Beer } from './beer';

@Component({
  selector: 'br-detail',
  inputs: ['beer'],
  template: `
    <div class="beer-item">
      <div class="name">Name: {{beer.name}}</div>
      <div class="brewery">Brewery: {{beer.brewery}}</div>
      <div class="type">Type: {{beer.type}}</div>
      <div class="abv">Abv: {{beer.abv}}%</div>
      <div class="ibu">Ibu: {{beer.ibu}}</div>
      <!--<div class="description">Description: {{beer.description}}</div>-->
    </div>`,
    styles: [`
      .name {
        color: brown;
      }
      .beer-item {
        color: green;
      }
    `]
})
export class BeerDetailComponent {
  public beer: Beer;
}