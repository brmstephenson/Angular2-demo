System.register(['angular2/core', 'angular2/common', './beer.service', './br-detail.component'], function(exports_1, context_1) {
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
    var core_1, common_1, beer_service_1, br_detail_component_1;
    var BeerSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (beer_service_1_1) {
                beer_service_1 = beer_service_1_1;
            },
            function (br_detail_component_1_1) {
                br_detail_component_1 = br_detail_component_1_1;
            }],
        execute: function() {
            BeerSearchComponent = (function () {
                function BeerSearchComponent(beerService) {
                    var _this = this;
                    this.beerService = beerService;
                    this.term = new common_1.Control();
                    this.results = this.term.valueChanges
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .switchMap(function (term) { return _this.beerService.search(term); });
                }
                BeerSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'br-search',
                        providers: [beer_service_1.BeerService],
                        directives: [br_detail_component_1.BeerDetailComponent],
                        template: "\n      <div class=\"search\">\n        <h1>Search for Beer</h1>\n        <input type=\"text\" [ngFormControl]=\"term\"/>\n        <div *ngFor=\"#r of results | async\" class=\"beer-item\">\n          <br-detail [beer]=\"r\"></br-detail>\n        </div>\n      </div>\n    ",
                        styles: ["\n      input {\n        height: 30px;\n        font-size: 1.2em;\n      }\n      .search {\n        padding: 10px;\n      }\n      .beer-item {\n        margin: 10px;\n        border: 1px green solid;\n        width: 500px;\n      }\n    "]
                    }), 
                    __metadata('design:paramtypes', [beer_service_1.BeerService])
                ], BeerSearchComponent);
                return BeerSearchComponent;
            }());
            exports_1("BeerSearchComponent", BeerSearchComponent);
        }
    }
});
//# sourceMappingURL=br-search.component.js.map