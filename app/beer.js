System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Beer;
    return {
        setters:[],
        execute: function() {
            Beer = (function () {
                function Beer(beer) {
                    this.name = beer && beer.name || null;
                    this.brewery = beer && beer.brewery || null;
                    this.description = beer && beer.description || null;
                    this.abv = beer && beer.abv || null;
                    this.ibu = beer && beer.ibu || null;
                    this.type = beer && beer.type || null;
                }
                return Beer;
            }());
            exports_1("Beer", Beer);
        }
    }
});
//# sourceMappingURL=beer.js.map