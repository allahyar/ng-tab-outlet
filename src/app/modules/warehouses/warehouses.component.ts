import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit, ViewRef} from '@angular/core';
import {TabsService} from '../../services/tabs.service';
import {Outlet} from '../../classes/outlet';
import {BehaviorSubject} from 'rxjs';

@Component({
	selector: 'warehouses',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
        {{uuid.getValue()}}
        {{isActivated}}
        <router-outlet *ngIf="isActivated"></router-outlet>
	`
})
export class WarehousesComponent extends Outlet implements OnInit, OnDestroy {

	uuid = new BehaviorSubject(null);

	isActivated = true;

	constructor(public tabsService: TabsService,
				private cd: ChangeDetectorRef) {
		super();

		this.tabsService._uuidSelected.subscribe(uniqueId => {

			this.isActivated = false;
			const uniqueIdSelected = this.tabsService._uuidSelected.getValue();

			if ((uniqueIdSelected || uniqueId) && uniqueId === uniqueIdSelected) {
				this.isActivated = true;
			}


			setTimeout(() => {
				if (!(this.cd as ViewRef).destroyed) {
					cd.detectChanges();
				}
			});
		});

	}

	ngOnInit() {
	}

	ngOnDestroy() {
	}
}
