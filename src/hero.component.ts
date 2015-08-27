import {Component, Inject, NgFor, View } from 'angular2/angular2';
import {Backend} from 'backend';
import {Hero} from 'hero';
import {HeroDataService} from 'hero.dataservice';

const initialHeroName = 'Igor';

@Component({
    selector: 'hero'
    //, viewBindings: diBinding // component DI registration
})
@View({
    templateUrl: 'hero.html',
    directives: [NgFor],
    styles: ['.heroes {list-style-type: none; margin-left: 1em; padding: 0}']
})
export class HeroComponent {
    private _currentHero = Hero.nullo;

    constructor(private _heroDataService: HeroDataService) { }

    get currentHero() {
        if (this._currentHero.isNullo) {
            this._currentHero = this._heroDataService.getOrCreateHero(initialHeroName);
        }
        return this._currentHero;
    }
    set currentHero(value) {
        this._currentHero = value;
    }

    get heroes() {
        return this._heroDataService.getAllHeroes();
    }

    onHeroSelected(hero: Hero) {
        this.currentHero = hero;
        console.log(`Hero selected: ${hero.name}`);
    }
}