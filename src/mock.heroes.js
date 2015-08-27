System.register(['hero'], function(exports_1) {
    var hero_1;
    var HEROES;
    return {
        setters:[
            function (_hero_1) {
                hero_1 = _hero_1;
            }],
        execute: function() {
            exports_1("HEROES", HEROES = [
                new hero_1.Hero('Naomi'),
                new hero_1.Hero('Brad'),
                new hero_1.Hero('Ward'),
                new hero_1.Hero('Julie'),
                new hero_1.Hero('Brian'),
                new hero_1.Hero('Jeff'),
                new hero_1.Hero('Kathy'),
            ]);
        }
    }
});
//# sourceMappingURL=mock.heroes.js.map