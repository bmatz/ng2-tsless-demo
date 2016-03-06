import {Component, Inject} from 'angular2/core';
import {Router} from 'angular2/router';

import {UserService} from '../services/userService';
import {CountryService} from '../services/countryService';

@Component({
	selector: 'registrationComponent',
	template: `
		<form #registrationForm="ngForm">
			<div class="alert alert-danger" *ngIf="error">{{error}}</div>
		  <div class="form-group">
			<label for="exampleInputEmail1">Email address</label>
			<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" required #email="ngForm" ngControl="email">
			<div class="alert alert-danger" [hidden]="email.valid || email.pristine">Email required</div>
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">Password</label>
			<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required #password="ngForm" ngControl="password">
			<div class="alert alert-danger" [hidden]="password.valid || password.pristine">Password required</div>
		  </div>
			<div class="form-group">
				<select class="form-control" ngControl="country" #country="ngForm">
					<option value="">Select a country</option>
					<option *ngFor="#c of countries" [value]="c.alpha2Code">{{ c.name }}</option>
				</select>
			</div>

		  <button type="submit" class="btn btn-default" [disabled]="!registrationForm.form.valid" (click)="register(email.value, password.value, country.value)">Submit</button>
		</form>
	`,
	providers : [UserService, CountryService]
})
export class RegistrationComponent {
	constructor(UserService: UserService, Router: Router, CountryService: CountryService) {
		this.UserService = UserService;
		this.Router = Router;
		CountryService.getCountries()
			.subscribe(countries => {
				this.countries = countries;
			})
	}

	register(email, password, country) {
		this.UserService.register(email, password)
			.subscribe(user => {
				this.Router.navigateByUrl("/");
			}, error => {
				this.error = error;
			});
	}
}
