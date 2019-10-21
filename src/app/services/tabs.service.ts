import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TabsService {

	_items: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
	_activeTab = 0;

	getTabs(): any[] {
		return this._items.getValue();
	}

	setTab(tab: any) {
		const tabs = this.getTabs().push(tab);
		const tabsIndex = this.getTabs().length - 1;
		// this._items.next([...tabs, ...tab]);
		this.setActivate(tabsIndex);
	}

	setActivate(index: number) {
		this.setDeactivateAll();
		this.getTabs()[index].isActivate = true;
		this._activeTab = index;
	}

	setDeactivateAll() {
		this.getTabs().forEach((v, i) => {
			// console.log(this.getTabs()[i]);
			this.getTabs()[i].isActivate = false;
		});
	}

	setLink() {

	}

	destroy() {
		this._items.next([]);
	}

	getState(): boolean {
		return this.getTabs().filter(x => x.isActivate === false).length === 0;
	}

}
