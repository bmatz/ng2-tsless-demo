import {Component, Input, Inject} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {ForRangeDirective} from '../directives/forRangeDirective';

@Component({
	selector: 'paginationComponent',
	template: `
		<nav *ngIf="pager">
		  <ul class="pagination">
			<li *forRange="pager.pages; #i = index" (click)="goToPage(i)"><a>{{ i }}</a></li>
		  </ul>
		</nav>
	`,
	directives : [ForRangeDirective]
})
export class PaginationComponent {
	@Input() pager;
	@Input() pathName;

	constructor(Router: Router, RouteParams: RouteParams) {
		this.Router = Router;
		this.query = RouteParams.get('query');
	}

	goToPage(page) {
		let params = {};

		if (this.query) {
			params['query'] = this.query;
		}
		params['page'] = page;

		this.Router.navigate([this.pathName, params]);
	}
}
