import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TabsService} from '../../services/tabs.service';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

	constructor(private route: ActivatedRoute,
				private tabsService: TabsService,
				private router: Router) {
	}


	ngOnInit() {
	}

	navigate(path) {
		this.router.navigate([path], {relativeTo: this.route});
	}

}
