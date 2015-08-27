import {Hero} from 'hero';
import {HEROES} from 'mock.heroes';

export class Backend {
	fetchAllHeroes() {
		return new Promise<Hero[]>((resolve, reject) =>{
			setTimeout(() => {
				resolve(HEROES.slice());
			}, 500);
		});
	}
}