import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UiService {

	_isTabParentState = new BehaviorSubject(false);

	constructor() {
	}

	setTabState(isParent: boolean) {
		this._isTabParentState.next(isParent);
	}

	getTabState(): BehaviorSubject<boolean> {
		return this._isTabParentState;
	}
}
