import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {UserService} from '../services/userService';


@Component({
		selector : 'loginComponent',
		template : `
				<form #loginForm="ngForm">
					<div class="alert alert-danger" *ngIf="error">{{ error }}</div>
					<div class="form-group">
						<label for="exampleInputEmail1" >Email address</label>
						<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" #email="ngForm" ngControl="email" required>
						<div class="alert alert-danger" [hidden]="email.valid || email.pristine">Login Required</div>
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" #password="ngForm" ngControl="password" required>
						<div class="alert alert-danger" [hidden]="password.valid || password.pristine">Password Required</div>
					</div>
					<button type="submit" class="btn btn-default" [disabled]="!loginForm.form.valid" (click)="login(email.value, password.value)">Submit</button>
				</form>
		`,
		providers : [UserService]
})
export class LoginComponent {

		constructor(UserService: UserService, Router: Router) {
			this.UserService = UserService;
			this.Router = Router;
		}

		login(email, password) {
				this.UserService.login(email, password)
						.subscribe(user => {
								this.Router.navigateByUrl("/");
						}, error => {
								this.error = error;
						});
		}
}
