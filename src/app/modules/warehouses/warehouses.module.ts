import {ComponentFactoryResolver, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WarehousesListComponent} from './warehouses-list/warehouses-list.component';
import {WarehouseCardComponent} from './warehouse-card/warehouse-card.component';
import {WarehouseUsersListComponent} from './warehouse-users-list/warehouse-users-list.component';
import {WarehouseUserCardComponent} from './warehouse-user-card/warehouse-user-card.component';
import {WarehouseTabsComponent} from './warehouse-tabs/warehouse-tabs.component';
import {NewWarehousesComponent} from './new-warehouses/new-warehouses.component';
import {FactoryService} from '../../factory.service';
import {WarehousesComponent} from './warehouses.component';


const routes: Routes = [
	{
		path: '',
		component: WarehousesComponent,
		children: [
			{path: 'new', component: NewWarehousesComponent},
			{
				path: '',
				component: WarehousesListComponent
			},
			{
				path: 'warehouse',
				children: [
					{path: '', redirectTo: '/app/warehouses', pathMatch: 'full'},
					{
						path: ':id',
						children: [
							{
								path: '',
								component: WarehouseTabsComponent,
								children: [
									{path: 'card', component: WarehouseCardComponent},
									{path: 'users', component: WarehouseUsersListComponent}
								]
							},
							{path: 'user/:id', component: WarehouseUserCardComponent}
						]
					}
				]
			}
		]
	}
];


@NgModule({
	declarations: [
		WarehousesListComponent,
		WarehouseCardComponent,
		WarehouseUsersListComponent,
		WarehouseUserCardComponent,
		WarehouseTabsComponent,
		NewWarehousesComponent,
		WarehousesComponent,
	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	entryComponents: [
		WarehousesListComponent,
		NewWarehousesComponent
	]
})
export class WarehousesModule {
	constructor(
		factoryService: FactoryService,
		componentFactoryResolver: ComponentFactoryResolver
	) {
		factoryService.addFactory(componentFactoryResolver);
	}
}
