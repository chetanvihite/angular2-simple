import {bootstrap} from 'angular2/angular2';
import {Backend} from 'backend';
import {HeroComponent} from 'hero.component';
import {HeroDataService} from 'hero.dataservice';

// bootstrap(AppComponent); // works if using component DI registration

// global DI registration

bootstrap(HeroComponent, [HeroDataService, Backend]);
