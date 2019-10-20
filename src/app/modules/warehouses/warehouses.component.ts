import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewRef} from '@angular/core';
import {UiService} from '../../ui.service';
import {TabsService} from '../../services/tabs.service';
import {Outlet} from '../../classes/outlet';
import {BehaviorSubject} from 'rxjs';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
       <!--       {{uuid.getValue()}}-->
       {{isActivated}}
       <router-outlet *ngIf="isActivated"></router-outlet>
	`
})
export class WarehousesComponent extends Outlet implements OnInit, OnDestroy {

	uuid = new BehaviorSubject(null);

	isActivated: boolean;

	constructor(public tabsService: TabsService,
				private cd: ChangeDetectorRef) {
		super();

		this.tabsService._uuidSelected.subscribe(uniqueId => {

			this.isActivated = false;
			const uniqueIdSelected = this.tabsService._uuidSelected.getValue();

			console.log('uuid', uniqueId, uniqueIdSelected);

			if ((uniqueIdSelected || uniqueId) && uniqueId === uniqueIdSelected) {
				this.isActivated = true;
			}

			setTimeout(() => {
				if (!(this.cd as ViewRef).destroyed) {
					cd.detectChanges();
					console.log('detectChanges');
				}
			});

		});

	}

	ngOnInit() {
	}

	ngOnDestroy() {
	}

}
