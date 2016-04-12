import { bootstrap } from 'angular2/platform/browser';
import { BeerAppComponent } from './br-app.component';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from 'angular2/http';

bootstrap(BeerAppComponent, [HTTP_PROVIDERS, JSONP_PROVIDERS]);
