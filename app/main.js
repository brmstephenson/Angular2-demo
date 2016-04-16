System.register(['angular2/core', 'angular2/platform/browser', './br-app.component', './br-search.component', './pirate-term.component', 'angular2/http', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, browser_1, br_app_component_1, br_search_component_1, pirate_term_component_1, http_1, router_1;
    var BeerApplication;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (br_app_component_1_1) {
                br_app_component_1 = br_app_component_1_1;
            },
            function (br_search_component_1_1) {
                br_search_component_1 = br_search_component_1_1;
            },
            function (pirate_term_component_1_1) {
                pirate_term_component_1 = pirate_term_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            BeerApplication = (function () {
                function BeerApplication() {
                }
                BeerApplication = __decorate([
                    core_1.Component({
                        selector: 'beer-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n    <div>\n      <ul>\n        <li class=\"logo\"><a [routerLink]=\"['/Home']\"><img src=\"https://angular.io/resources/images/logos/standard/logo-nav.png\" /></a></li>\n        <li class=\"link\"><a [routerLink]=\"['/Home']\">Home</a></li>\n        <li class=\"link\"><a [routerLink]=\"['/Search']\">Search</a></li>\n        <li class=\"link\"><a [routerLink]=\"['/Pirate']\">Pirate Talk</a></li>\n      </ul>\n      <router-outlet></router-outlet>\n    </div>\n  ",
                        styles: ["\n    .logo img {\n      margin-top: 5px;\n      margin-left: 5px;\n    }\n    ul {\n      list-style: none;\n      display: flex;\n      background-color: #000000;\n    }\n    .link {\n      padding: 15px 10px;\n    }\n    .link a:hover {\n      color: #0143A3;\n    }\n    .link a {\n      text-decoration: none;\n      color: #ffffff;\n    }\n  "]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'root', redirectTo: ['/Home'] },
                        { path: '/home', name: 'Home', component: br_app_component_1.BeerAppComponent },
                        { path: '/search', name: 'Search', component: br_search_component_1.BeerSearchComponent },
                        { path: '/pirate', name: 'Pirate', component: pirate_term_component_1.PirateTalkComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], BeerApplication);
                return BeerApplication;
            }());
            browser_1.bootstrap(BeerApplication, [
                http_1.HTTP_PROVIDERS,
                http_1.JSONP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map