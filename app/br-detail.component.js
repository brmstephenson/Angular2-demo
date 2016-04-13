System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var BeerDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BeerDetailComponent = (function () {
                function BeerDetailComponent() {
                }
                BeerDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'br-detail',
                        inputs: ['beer'],
                        template: "\n    <div class=\"beer-item\">\n      <div class=\"name\">Name: {{beer.name}}</div>\n      <div class=\"brewery\">Brewery: {{beer.brewery}}</div>\n      <div class=\"type\">Type: {{beer.type}}</div>\n      <div class=\"abv\">Abv: {{beer.abv}}%</div>\n      <div class=\"ibu\">Ibu: {{beer.ibu}}</div>\n      <!--<div class=\"description\">Description: {{beer.description}}</div>-->\n    </div>",
                        styles: ["\n      .name {\n        color: brown;\n      }\n      .beer-item {\n        color: green;\n      }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BeerDetailComponent);
                return BeerDetailComponent;
            }());
            exports_1("BeerDetailComponent", BeerDetailComponent);
        }
    }
});
//# sourceMappingURL=br-detail.component.js.map