export class User {
	constructor(authData) {
		this.email = authData.password.email;
	}
}
