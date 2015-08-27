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
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};System.register(['angular2/angular2', 'hero', 'backend'], function(exports_1) {
    var angular2_1, hero_1, backend_1;
    var HeroDataService;
    return {
        setters:[
            function (_angular2_1) {
                angular2_1 = _angular2_1;
            },
            function (_hero_1) {
                hero_1 = _hero_1;
            },
            function (_backend_1) {
                backend_1 = _backend_1;
            }],
        execute: function() {
            HeroDataService = (function () {
                function HeroDataService(_backend) {
                    this._backend = _backend;
                    ///////////////////
                    this._heroes = [];
                }
                HeroDataService.prototype.getAllHeroes = function (force) {
                    var _this = this;
                    if (force === void 0) { force = false; }
                    if (force) {
                        this._heroes.fetched = false;
                        this._heroes.ready = null;
                    }
                    // if already fetched (or not forcing fetch)
                    // return existing heroes via promise
                    if (this._heroes.fetched) {
                        this._heroes.ready = Promise.resolve(this._heroes);
                    }
                    // // if getAll in progress or completed (indicated by existence of promise)
                    if (this._heroes.ready) {
                        return this._heroes; //.ready
                    }
                    // clear heroes and initiate new fetch, returning its promise
                    this._heroes.fetching = true;
                    this._heroes.fetched = false;
                    this._heroes.length = 0;
                    this._heroes.ready = this._backend.fetchAllHeroes()
                        .then(function (heroes) {
                        _this._heroes.fetching = false;
                        _this._heroes.fetched = true;
                        heroes.forEach(function (h) { return _this._heroes.push(h); });
                        console.log(heroes);
                        return _this._heroes;
                    })
                        .catch(function (err) {
                        _this._heroes.fetching = false;
                        _this._heroes.fetched = false;
                        _this._heroes.ready = null;
                        console.log("getAllHeroes failed w/ message:\"" + err + "\"");
                        return Promise.reject(err);
                    });
                    return this._heroes; //.ready;
                };
                HeroDataService.prototype.getOrCreateHero = function (name) {
                    var _this = this;
                    var hero; // = Hero.nullo;
                    if (this._heroes.fetched) {
                        hero = this._getOrCreateHeroFromCache(name);
                    }
                    else if (!this._heroes.fetching) {
                        this.getAllHeroes();
                        this._heroes.ready
                            .then(function (_) { return hero = _this._getOrCreateHeroFromCache(name); });
                    }
                    return hero;
                };
                HeroDataService.prototype._getOrCreateHeroFromCache = function (name) {
                    // if (!name) {
                    //     return Hero.nullo;
                    // }
                    var matches = this._heroes.filter(function (hero) {
                        return hero.name === name;
                    });
                    if (matches.length) {
                        return matches[0];
                    }
                    else {
                        var hero = new hero_1.Hero(name);
                        this._heroes.push(hero);
                        return hero;
                    }
                };
                HeroDataService = __decorate([
                    __param(0, angular2_1.Inject(backend_1.Backend)), 
                    __metadata('design:paramtypes', [backend_1.Backend])
                ], HeroDataService);
                return HeroDataService;
            })();
            exports_1("HeroDataService", HeroDataService);
        }
    }
});
//# sourceMappingURL=hero.dataservice.js.map