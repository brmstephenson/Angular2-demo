System.register(['angular2/core', 'angular2/http', './beer', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, beer_1;
    var BeerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (beer_1_1) {
                beer_1 = beer_1_1;
            },
            function (_1) {}],
        execute: function() {
            BeerService = (function () {
                function BeerService(http) {
                    this.http = http;
                    this._beerUrl = "http://localhost:1337/api.brewerydb.com/v2/beers?availableId=1&withBreweries=Y&key=2d18b2531035b441a50dddc3aed32a1b";
                    this._searchUrl = "http://api.brewerydb.com/v2/search?q=Goosinator&type=beer&withBreweries=Y&key=2d18b2531035b441a50dddc3aed32a1b";
                }
                BeerService.prototype.getBeer = function () {
                    return this.http.get(this._beerUrl)
                        .map(function (response) {
                        return response.json().data.map(function (item) {
                            return new beer_1.Beer({
                                name: item.nameDisplay,
                                brewery: item.breweries[0].nameShortDisplay,
                                description: item.description,
                                abv: item.abv,
                                ibu: item.ibu,
                                type: item.style.shortName
                            });
                        });
                    });
                };
                BeerService.prototype.handleError = function (error) {
                    console.log(error);
                };
                BeerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BeerService);
                return BeerService;
            }());
            exports_1("BeerService", BeerService);
        }
    }
});
//# sourceMappingURL=beer.service.js.map