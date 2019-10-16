import {Component} from '@angular/core';
import {UiService} from './ui.service';
import {Router} from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'tab-outlet';

	constructor(private uiService: UiService,
				private router: Router) {

	}

	openTab(url) {
		this.uiService.setTabState(false);
		return this.router.navigateByUrl(url);
	}
}
