import {
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

@Directive({
	selector: '[componentLoader]'
})
export class ComponentLoaderDirective implements OnInit, OnDestroy {

	isAlive = true;

	@Input('componentLoader')
	component: Type<any>;

	@Input('componentLoaderParameters')
	parameters: any;

	@Input('componentLoaderProviders')
	providers: StaticProvider[];


	constructor(
		private factoryService: FactoryService,
		private viewContainerRef: ViewContainerRef,
		private injector: Injector
	) {
	}

	ngOnInit() {
		const componentFactory = this.factoryService.getFactory(this.component);
		this.viewContainerRef.clear();
		const localInjector = Injector.create(this.providers || [], this.injector);

		const componentRef = this.viewContainerRef.createComponent(
			componentFactory,
			undefined,
			localInjector
		);

	}

	ngOnDestroy(): void {
		this.component = undefined;
		this.parameters = undefined;
		this.isAlive = false;
	}

}
