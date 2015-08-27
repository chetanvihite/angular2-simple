System.register([], function(exports_1) {
    var nextId, Hero, nullo;
    return {
        setters:[],
        execute: function() {
            nextId = 1;
            Hero = (function () {
                function Hero(_name, _id) {
                    this._name = _name;
                    this._id = _id;
                    if (_id == null) {
                        this._id = nextId++;
                    }
                }
                Object.defineProperty(Hero.prototype, "id", {
                    get: function () { return this._id; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Hero.prototype, "isNullo", {
                    get: function () { return this._id === 0; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Hero.prototype, "name", {
                    get: function () { return this._name; },
                    set: function (value) { this._name = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Hero, "nullo", {
                    get: function () { return nullo; },
                    enumerable: true,
                    configurable: true
                });
                return Hero;
            })();
            exports_1("Hero", Hero);
            nullo = new Hero('Noman', 0);
        }
    }
});
//# sourceMappingURL=hero.js.map