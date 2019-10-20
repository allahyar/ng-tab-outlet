import {
	ComponentRef,
	Directive,
	Injector,
	Input,
	OnDestroy,
	OnInit,
	StaticProvider,
	Type,
	ViewContainerRef, ViewRef
} from '@angular/core';
import {FactoryService} from './factory.service';
import {Outlet} from './classes/outlet';
import {ActivatedRoute, ActivationEnd, NavigationEnd, Router} from '@angular/router';
import {TabsService} from './services/tabs.service';

@Directive({
	selector: '[componentLoader]'
})
export class ComponentLoaderDirective implements OnInit, OnDestroy {

	isAlive = true;

	@Input('componentLoader')
	component: Type<any>;

	@Input('componentLoaderParameters')
	parameters: any;

	@Input('componentLoaderUniqueId')
	uniqueId: any;

	@Input('componentLoaderProviders')
	providers: StaticProvider[];


	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private tabsService: TabsService,
		private factoryService: FactoryService,
		private viewContainerRef: ViewContainerRef,
		private injector: Injector
	) {
	}

	ngOnInit() {
		this.viewContainerRef.clear();
		const componentFactory = this.factoryService.getFactory(this.component);
		const localInjector = Injector.create(this.providers || [], this.injector);

		const componentRef = this.viewContainerRef.createComponent<any>(
			componentFactory,
			undefined,
			localInjector
		);


		const uniqueId = componentRef.instance.uuid;
		if (uniqueId) {
			uniqueId.next(this.uniqueId);
			this.tabsService._uuidSelected.next(this.uniqueId);
		}

	}


	ngOnDestroy(): void {
		this.component = undefined;
		this.parameters = undefined;
		this.isAlive = false;
	}

}
