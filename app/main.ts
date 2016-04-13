import { provide, Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { BeerAppComponent } from './br-app.component';
import { BeerSearchComponent } from './br-search.component';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from 'angular2/http';
import { 
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    HashLocationStrategy,
    LocationStrategy,
    RouteConfig 
} from 'angular2/router';

@Component({
  selector: 'beer-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <div>
      <ul>
        <li class="logo"><a [routerLink]="['/Home']"><img src="https://angular.io/resources/images/logos/standard/logo-nav.png" /></a></li>
        <li class="link"><a [routerLink]="['/Home']">Home</a></li>
        <li class="link"><a [routerLink]="['/Search']">Search</a></li>
      </ul>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .logo img {
      margin-top: 5px;
      margin-left: 5px;
    }
    ul {
      list-style: none;
      display: flex;
      background-color: #000000;
    }
    .link {
      padding: 15px 10px;
    }
    .link a:hover {
      color: #0143A3;
    }
    .link a {
      text-decoration: none;
      color: #ffffff;
    }
  `]
})
@RouteConfig([
  {path: '/', name: 'root', redirectTo: ['/Home'] },
  {path: '/home', name: 'Home', component: BeerAppComponent },
  {path: '/search', name: 'Search', component: BeerSearchComponent}
])
class BeerApplication {
}
bootstrap(BeerApplication, [
  HTTP_PROVIDERS, 
  JSONP_PROVIDERS, 
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
