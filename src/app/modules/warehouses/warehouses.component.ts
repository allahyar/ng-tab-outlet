import {Component, OnDestroy, OnInit} from '@angular/core';
import {UiService} from '../../ui.service';

@Component({
	template: `
       <router-outlet *ngIf="showOutlet"></router-outlet>
	`
})
export class WarehousesComponent implements OnInit, OnDestroy {

	showOutlet = true;

	constructor(private uiService: UiService) {
		uiService.getTabState().subscribe(res => {
			this.showOutlet = res;
		});
	}

	ngOnInit() {
	}

	ngOnDestroy() {
	}

}
