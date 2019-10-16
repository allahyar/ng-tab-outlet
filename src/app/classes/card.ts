import {ElementRef, ViewChild} from '@angular/core';

export class Card {

	@ViewChild('outlet', {static: true})
	private set outlet(ref: ElementRef) {
		if (ref) {
			ref.nativeElement.remove();
		}
	}


}
