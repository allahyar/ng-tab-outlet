import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	NgZone,
	OnDestroy,
	ViewChild,
	ViewRef
} from '@angular/core';
import {TabsService} from '../../services/tabs.service';
import {Outlet} from '../../classes/outlet';
import {Router, RouterOutlet} from '@angular/router';

@Component({
	selector: 'warehouses',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
       <router-outlet #outlet *ngIf="isActivated"></router-outlet>
	`
})
export class WarehousesComponent extends Outlet implements OnDestroy {

	@ViewChild(RouterOutlet, {static: false}) outlet: RouterOutlet;

	isActivated = true;

	constructor(
		private tabsService: TabsService,
		private router: Router,
		private zone: NgZone,
		private cd: ChangeDetectorRef) {
		super();

		this.zone.run(() => {
			setTimeout(() => {
				if (!(this.cd as ViewRef).destroyed) {
					this.outlet.deactivate();
					this.isActivated = false;
				}
			}, 2000);
		});


		// this.tabsService._items.subscribe(v => {
		// 	// this.isActivated = false;
		// 	setTimeout(() => {
		// 		if (!(this.cd as ViewRef).destroyed) {
		// 			cd.detectChanges();
		// 		}
		// 	});
		// });
	}

	ngOnDestroy(): void {
		console.log('ok');
	}

}
