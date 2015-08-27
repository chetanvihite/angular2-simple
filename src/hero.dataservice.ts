import {Inject} from 'angular2/angular2';
import {Hero} from 'hero';
import {Backend} from 'backend';

interface Heroes extends Array<Hero> {
    ready: Promise<Hero[]>;
    fetching: boolean;
    fetched: boolean;
}

export class HeroDataService {
    constructor( @Inject(Backend) private _backend: Backend) { }

    getAllHeroes(force: boolean = false) {
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
            return this._heroes;
        }

        // clear heroes and initiate new fetch, returning its promise
        this._heroes.fetching = true;
        this._heroes.fetched = false;
        this._heroes.length = 0;

        this._heroes.ready = this._backend.fetchAllHeroes()
            .then(heroes => {
                this._heroes.fetching = false;
                this._heroes.fetched = true;
            heroes.forEach(h => this._heroes.push(h));
            console.log(heroes);
            return this._heroes;
            })
            .catch(err => {
                this._heroes.fetching = false;
                this._heroes.fetched = false;
                this._heroes.ready = null;
                console.log(`getAllHeroes failed w/ message:"${err}"`);
                return Promise.reject(err);
            });
        return this._heroes;
    }

    getOrCreateHero(name?: string) {
        let hero: Hero;

        if (this._heroes.fetched) {
            hero = this._getOrCreateHeroFromCache(name);
        } else if (!this._heroes.fetching) {
            this.getAllHeroes();
            this._heroes.ready
                .then(_ => hero = this._getOrCreateHeroFromCache(name))
        }
        return hero;
    }

    ///////////////////
    protected _heroes = <Heroes>[];

    protected _getOrCreateHeroFromCache(name?: string) {
        let matches = this._heroes.filter(hero => {
            return hero.name === name;
        });

        if (matches.length) {
            return matches[0];
        } else {
            let hero = new Hero(name);
            this._heroes.push(hero);
            return hero;
        }
    }
}
