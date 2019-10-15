import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {TabOutletComponent} from './tab-outlet/tab-outlet.component';
import {LayoutComponent} from './pages/layout/layout.component';
import {ComponentLoaderDirective} from './component-loader.directive';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		TabOutletComponent,
		LayoutComponent,
		ComponentLoaderDirective
	],
	imports: [
		BrowserModule,
		AppRouting,
		NgbTabsetModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
