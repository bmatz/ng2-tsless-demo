import {Component} from 'angular2/core';

@Component({
	selector: 'footerComponent',
	template: `
		<footer class="footer">
			<div class="container">
				<a class="text-muted" href="/">Bernhard Matz, {{ year }}</a>
				<a class="text-muted" href="http://trigo.at" target="_blank"><i class="fa fa-heart"></i> Powered by triGo</a>
			</div>
		</footer>`
})
export class FooterComponent {
	constructor() {
		this.year = new Date().getFullYear();
	}
}
