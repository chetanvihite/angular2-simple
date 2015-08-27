var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};System.register(['angular2/angular2', 'hero.dataservice'], function(exports_1) {
    var angular2_1, hero_dataservice_1;
    var initialHeroName, HeroComponent;
    return {
        setters:[
            function (_angular2_1) {
                angular2_1 = _angular2_1;
            },
            function (_hero_dataservice_1) {
                hero_dataservice_1 = _hero_dataservice_1;
            }],
        execute: function() {
            initialHeroName = 'Igor';
            HeroComponent = (function () {
                function HeroComponent(_heroDataService) {
                    this._heroDataService = _heroDataService;
                }
                Object.defineProperty(HeroComponent.prototype, "currentHero", {
                    get: function () {
                        if (!this._currentHero) {
                            this._currentHero = this._heroDataService.getHero(initialHeroName);
                        }
                        return this._currentHero;
                    },
                    set: function (value) {
                        this._currentHero = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HeroComponent.prototype, "heroes", {
                    get: function () {
                        return this._heroDataService.getAllHeroes();
                    },
                    enumerable: true,
                    configurable: true
                });
                HeroComponent.prototype.onHeroSelected = function (hero) {
                    this.currentHero = hero;
                    console.log("Hero selected: " + hero.name);
                };
                HeroComponent = __decorate([
                    angular2_1.Component({
                        selector: 'hero'
                    }),
                    angular2_1.View({
                        templateUrl: 'hero.html',
                        directives: [angular2_1.NgFor, angular2_1.NgIf],
                        styles: ['.heroes {list-style-type: none; margin-left: 1em; padding: 0}']
                    }), 
                    __metadata('design:paramtypes', [hero_dataservice_1.HeroDataService])
                ], HeroComponent);
                return HeroComponent;
            })();
            exports_1("HeroComponent", HeroComponent);
        }
    }
});
//# sourceMappingURL=hero.component.js.map