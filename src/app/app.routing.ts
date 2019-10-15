import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {LayoutComponent} from './pages/layout/layout.component';


const routes: Routes = [
		{path: 'login', component: LoginComponent},
		{
			path: 'app',
			children: [
				{
					path: 'dashboard',
					loadChildren: () => import('./modules/modules.routing').then(m => m.Modules)
				},
				{
					path: '',
					component: LayoutComponent,
					loadChildren: () => import('./modules/modules.routing').then(m => m.Modules)
				}
			]
		}
	]
;

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		// enableTracing: true,
		onSameUrlNavigation: 'reload',
		urlUpdateStrategy: 'eager'
	})],
	exports: [RouterModule]
})
export class AppRouting {
}
