import { Component } from 'angular2/core';
import { PirateService } from './pirate.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'pirate-term',
  providers: [PirateService],
  template: `
      <div class="pirate">
        <h1>Pirate life is the life for me</h1>
        <form>
          <input type="text" #box/>
          <input type="submit" value="Translate" (click)="translate(box.value)" />
        </form>
        <div>{{pirate}}</div>
      </div>
    `,
   styles: [`
    .pirate {
      padding: 10px;
    }
   `]
})
export class PirateTalkComponent {
  pirate: string;
  constructor(private pirateService: PirateService) { }

  translate(term: string) {
    if(term) {
      this.pirateService.getPirateText(term)
        .then(res => this.pirate = res.json().translation.pirate);
    }
  }

}