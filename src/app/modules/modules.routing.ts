import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{
		path: 'dashboard2',
		loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
	},
	{
		path: 'warehouses',
		loadChildren: () => import('./warehouses/warehouses.module').then(m => m.WarehousesModule)
	}
];

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	]
})
export class Modules {
}
