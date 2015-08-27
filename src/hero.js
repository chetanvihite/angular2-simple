System.register([], function(exports_1) {
    var nextId, Hero;
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
                Object.defineProperty(Hero.prototype, "name", {
                    // get isNullo() { return this._id === 0; }
                    get: function () { return this._name; },
                    set: function (value) { this._name = value; },
                    enumerable: true,
                    configurable: true
                });
                return Hero;
            })();
            exports_1("Hero", Hero);
        }
    }
});
// var nullo = new Hero('Noman', 0);
//# sourceMappingURL=hero.js.map