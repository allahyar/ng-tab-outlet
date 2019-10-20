import {Component} from '@angular/core';
import {UiService} from './ui.service';
import {Router} from '@angular/router';
import {TabsService} from './services/tabs.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	title = 'tab-outlet';

	constructor(private router: Router,
				private tabsService: TabsService) {

	}

	openTab(url) {
		this.tabsService._uuidSelected.next(null);
		this.router.navigateByUrl(url);
	}
}
