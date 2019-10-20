import {
	Component,
	ComponentFactoryResolver,
	ComponentRef,
	NgZone,
	OnDestroy,
	OnInit,
	StaticProvider,
	ViewChild
} from '@angular/core';
import {ActivatedRoute, ChildrenOutletContexts, PRIMARY_OUTLET, Router} from '@angular/router';
import {UUID} from 'angular2-uuid';
import {Location} from '@angular/common';
import {take} from 'rxjs/operators';
import {NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import {UiService} from '../ui.service';
import {TabsService} from '../services/tabs.service';

@Component({
	selector: 'tab-outlet',
	exportAs: 'outlet',
	templateUrl: './tab-outlet.component.html'
})
export class TabOutletComponent implements OnDestroy {

	name: any;
	tabs = this.tabsService.getTabs();

	@ViewChild('tabset', {static: true}) public tabsElement: NgbTabset;

	constructor(private parentContexts: ChildrenOutletContexts,
				private router: Router,
				private readonly zone: NgZone,
				private tabsService: TabsService,
				private location: Location) {
		this.name = name || PRIMARY_OUTLET;
		this.parentContexts.onChildOutletCreated(this.name, this as any);
	}

	activateWith(activatedRoute: ActivatedRoute,
				 resolver: ComponentFactoryResolver | null) {

		const snapshot = (activatedRoute as any)._futureSnapshot;
		const component = <any>snapshot.routeConfig !.component;
		const segments = snapshot._urlSegment.segments;

		const providers: StaticProvider[] = [];
		providers.push({provide: ActivatedRoute, useValue: activatedRoute});

		this.addView({
			title: segments[1].path,
			component,
			link: this.router.url,
			providers,
			uniqueId: UUID.UUID()
		});

	}


	addView(tab: any) {
		this.tabsService.setTab(tab);
		// this.zone.onStable
		// 	.pipe(take(1))
		// 	.subscribe(() => this.tabsElement.select(tab.uniqueId));
	}

	deactivate() {

	}

	ngOnDestroy(): void {
		this.tabsService.destroy();
		this.parentContexts.onChildOutletDestroyed(this.name);
	}

	trackByFn(index, item) {
		return item.uniqueId;
	}

	removeTab(index: number) {
		if (this.tabs.length > 1) {
			this.tabs.splice(index, 1);
		}
		return false;
	}

	changeTab(index: number) {
		const uniqueId = this.tabsService.getTabs()[index].uniqueId;
		this.tabsService._uuidSelected.next(uniqueId);
		this.location.replaceState(this.tabs[index].link);
	}

}

