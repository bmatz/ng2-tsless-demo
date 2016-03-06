import {Component} from 'angular2/core';

@Component({
	selector: 'welcomeComponent',
	template: `
		<div class="jumbotron">
		  <h1>Welcome to MyTunes</h1>
		  <p><a class="btn btn-primary btn-lg" href="#" role="button" *ngIf="!showMore" (click)="showMore=!showMore">Learn more</a></p>
		  <ul *ngIf="showMore">
			<li>Components</li>
			<li>Directives</li>
			<li>Routing</li>
			<li>Services</li>
			<li>TypeScript</li>
			<li>Styles</li>
			<li>Forms</li>
			<li>Http</li>
			<li>Data binding</li>
		  </ul>
		</div>
	`
})
export class WelcomeComponent {
}