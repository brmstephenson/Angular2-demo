import { Injectable } from 'angular2/core'
import { Http, Response } from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class PirateService {
  private _pirateUrl = "http://localhost:1337/isithackday.com/arrpi.php?format=json&text=";

  constructor(private http: Http) {}
  getPirateText(term: string) {
    return this.http.get(this._pirateUrl + term)
      .toPromise();
  }
}