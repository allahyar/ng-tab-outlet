import {Directive, ElementRef, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {UiService} from '../ui.service';

@Directive({
	selector: '[OutletDetector]'
})
export class OutletDetectorDirective {

	constructor(private uiService: UiService,
				private templateRef: TemplateRef<any>,
				private viewContainer: ViewContainerRef) {

		this.uiService.getTabState().subscribe(isShow => {
			if (isShow) {
				this.viewContainer.createEmbeddedView(this.templateRef);
				return true;
			}
			this.viewContainer.clear();
		});
	}

}
