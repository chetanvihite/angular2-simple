import {bootstrap} from 'angular2/angular2';
import {Backend} from 'backend';
import {HeroComponent} from 'hero.component';
import {HeroDataService} from 'hero.dataservice';

bootstrap(HeroComponent, [HeroDataService, Backend]);
