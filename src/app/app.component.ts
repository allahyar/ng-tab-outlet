import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TabsService} from './services/tabs.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	title = 'tab-outlet';

	constructor(private router: Router) {
	}

}
