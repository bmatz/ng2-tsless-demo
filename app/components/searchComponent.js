import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
	selector: 'searchComponent',
	template: `
		<div class="form-group">
		  <input type="text" class="form-control" placeholder="Search" (keyup)="onSearch(query, $event)" [(ngModel)]="query">
		</div>
		<button type="submit" class="btn btn-default" (click)="onSearch(query)">Search</button>
	`
})
export class SearchComponent {
	@Output() searchChange = new EventEmitter();

	constructor() {

	}
	onSearch(query, event) {
		if (!event || event.keyCode == 13) {
			this.searchChange.emit(query);
		}
	}
}