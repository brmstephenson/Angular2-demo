export class Beer {
  name: string;
  brewery: string;
  description: string;
  abv: number;
  ibu: number;
  type: string;

  constructor(beer?) {
    this.name = beer && beer.name || null;
    this.brewery = beer && beer.brewery || null;
    this.description = beer && beer.description || null;
    this.abv = beer && beer.abv || null;
    this.ibu = beer && beer.ibu || null;
    this.type = beer && beer.type || null;

  }
}