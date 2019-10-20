import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TabsService {

	_items: any[] = [];
	_uuidSelected = new BehaviorSubject(null);

	getTabs(): any[] {
		return this._items;
	}

	setTab(tab: any) {
		this._items.push(tab);
	}

	destroy() {
		this._items = [];
	}

	getState() {

	}

}
