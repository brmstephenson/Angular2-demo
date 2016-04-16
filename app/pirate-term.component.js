System.register(['angular2/core', './pirate.service'], function(exports_1, context_1) {
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
    var core_1, pirate_service_1;
    var PirateTalkComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pirate_service_1_1) {
                pirate_service_1 = pirate_service_1_1;
            }],
        execute: function() {
            PirateTalkComponent = (function () {
                function PirateTalkComponent(pirateService) {
                    this.pirateService = pirateService;
                }
                PirateTalkComponent.prototype.translate = function (term) {
                    var _this = this;
                    if (term) {
                        this.pirateService.getPirateText(term)
                            .then(function (res) { return _this.pirate = res.json().translation.pirate; });
                    }
                };
                PirateTalkComponent = __decorate([
                    core_1.Component({
                        selector: 'pirate-term',
                        providers: [pirate_service_1.PirateService],
                        template: "\n      <div class=\"pirate\">\n        <h1>Pirate life is the life for me</h1>\n        <form>\n          <input type=\"text\" #box/>\n          <input type=\"submit\" value=\"Translate\" (click)=\"translate(box.value)\" />\n        </form>\n        <div>{{pirate}}</div>\n      </div>\n    ",
                        styles: ["\n    .pirate {\n      padding: 10px;\n    }\n   "]
                    }), 
                    __metadata('design:paramtypes', [pirate_service_1.PirateService])
                ], PirateTalkComponent);
                return PirateTalkComponent;
            }());
            exports_1("PirateTalkComponent", PirateTalkComponent);
        }
    }
});
//# sourceMappingURL=pirate-term.component.js.map