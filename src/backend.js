System.register(['mock.heroes'], function(exports_1) {
    var mock_heroes_1;
    var Backend;
    return {
        setters:[
            function (_mock_heroes_1) {
                mock_heroes_1 = _mock_heroes_1;
            }],
        execute: function() {
            Backend = (function () {
                function Backend() {
                }
                Backend.prototype.fetchAllHeroes = function () {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            resolve(mock_heroes_1.HEROES.slice());
                        }, 500);
                    });
                };
                return Backend;
            })();
            exports_1("Backend", Backend);
        }
    }
});
//# sourceMappingURL=backend.js.map