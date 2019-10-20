import {
	ComponentRef,
	Directive,
	Injector,
	Input,
	OnDestroy,
	OnInit,
	StaticProvider,
	Type,
	ViewContainerRef
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

	componentRef: ComponentRef<any>;

	@Input('componentLoader')
	component: Type<any>;

	@Input('componentLoaderParameters')
	parameters: any;

	@Input('componentLoaderUuid')
	uuid: any;

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

		this.componentRef = this.viewContainerRef.createComponent<any>(
			componentFactory,
			undefined,
			localInjector
		);


		const uuid = this.componentRef.instance.uuid;
		if (uuid) {
			uuid.next(this.uuid);
			this.tabsService._uuidSelected.next(this.uuid);
		}
	}


	ngOnDestroy(): void {
		this.component = undefined;
		this.parameters = undefined;
		this.isAlive = false;
	}

}
