System.register(['angular2/angular2', 'backend', 'hero.component', 'hero.dataservice'], function(exports_1) {
    var angular2_1, backend_1, hero_component_1, hero_dataservice_1;
    return {
        setters:[
            function (_angular2_1) {
                angular2_1 = _angular2_1;
            },
            function (_backend_1) {
                backend_1 = _backend_1;
            },
            function (_hero_component_1) {
                hero_component_1 = _hero_component_1;
            },
            function (_hero_dataservice_1) {
                hero_dataservice_1 = _hero_dataservice_1;
            }],
        execute: function() {
            angular2_1.bootstrap(hero_component_1.HeroComponent, [hero_dataservice_1.HeroDataService, backend_1.Backend]);
        }
    }
});
//# sourceMappingURL=app.js.map