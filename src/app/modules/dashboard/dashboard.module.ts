import {ComponentFactoryResolver, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FactoryService} from '../../factory.service';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent
	}
];

@NgModule({
	declarations: [DashboardComponent],
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	entryComponents: [DashboardComponent]
})
export class DashboardModule {
	constructor(
		factoryService: FactoryService,
		componentFactoryResolver: ComponentFactoryResolver
	) {
		factoryService.addFactory(componentFactoryResolver);
	}
}
