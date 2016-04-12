System.register(["angular2/core", "./beer.service", "./search.pipe"], function(exports_1, context_1) {
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
    var core_1, beer_service_1, search_pipe_1;
    var BeerAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (beer_service_1_1) {
                beer_service_1 = beer_service_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            }],
        execute: function() {
            BeerAppComponent = (function () {
                function BeerAppComponent(_beerService) {
                    this._beerService = _beerService;
                }
                BeerAppComponent.prototype.ngOnInit = function () { this.getBeer(); };
                BeerAppComponent.prototype.getBeer = function () {
                    var _this = this;
                    this._beerService.getBeer()
                        .subscribe(function (beer) { return _this.beer = beer; }, function (error) { return _this.errorMessage = error; });
                };
                BeerAppComponent.prototype.selectBeer = function (b) {
                    this.selectedBeer = b;
                };
                BeerAppComponent = __decorate([
                    core_1.Component({
                        selector: "br-app",
                        providers: [beer_service_1.BeerService],
                        pipes: [search_pipe_1.SearchPipe],
                        styles: ["\n      .beer {\n        list-style: none;\n        padding: 0;\n      }\n      .beer-item{\n        background-color: #CFCFCF;\n        margin: 10px 0;\n        width: 250px;\n        cursor: pointer;\n        padding: 5px;\n      }\n      .name {\n        color: brown;\n      }\n      .selected {\n        background-color: #FBB117;\n      }\n    "],
                        template: "\n      <h1>Beer life is the life for me</h1>\n      <input type=\"text\" [(ngModel)]=\"query\"/>\n      <ul class=\"beer\" *ngIf=\"beer\">\n        <li *ngFor=\"#b of beer | search: query\"\n            class=\"beer-item\" \n            (click)=\"selectBeer(b)\" \n            [class.selected]=\"b === selectedBeer\">\n          <div class=\"name\">Name: {{b.name}}</div>\n          <div class=\"brewery\">Brewery: {{b.brewery}}</div>\n          <div class=\"type\">Type: {{b.type}}</div>\n          <div class=\"abv\">Abv: {{b.abv}}%</div>\n          <div class=\"ibu\">Ibu: {{b.ibu}}</div>\n          <!--<div class=\"description\">Description: {{b.description}}</div>-->\n        </li>\n      </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [beer_service_1.BeerService])
                ], BeerAppComponent);
                return BeerAppComponent;
            }());
            exports_1("BeerAppComponent", BeerAppComponent);
        }
    }
});
//# sourceMappingURL=br-app.component.js.map