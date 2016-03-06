import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {FooterComponent} from './components/footerComponent';
import {HeaderComponent} from './components/headerComponent';
import {WelcomeComponent} from './components/welcomeComponent';
import {AlbumListComponent} from './components/albumListComponent';
import {AlbumComponent} from './components/albumComponent';
import {RegistrationComponent} from './components/registrationComponent';
import {LoginComponent} from './components/loginComponent';

@Component({
  selector: 'myApp',
  template: `
		<headerComponent></headerComponent>
		<div class="container">
			<router-outlet></router-outlet>
		</div>
		<footerComponent></footerComponent>
	`,
 	directives: [FooterComponent, HeaderComponent, WelcomeComponent, AlbumListComponent, AlbumComponent, RouterOutlet]
})
@RouteConfig([
	{ path: "/", name : "Home", component: WelcomeComponent, useAsDefault: true },
	{ path: "/login", name: "Login", component: LoginComponent },
	{ path: "/register", name: "Register", component: RegistrationComponent },
	{ path: "/albumlist", name: "AlbumList", component: AlbumListComponent },
	{ path: "/album/:id", name: "Album", component: AlbumComponent }
])
export class AppComponent {
	constructor() {
		console.log('hello ng2');
	}
}