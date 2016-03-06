import {Injectable, Inject} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http} from 'angular2/http';
import "rxjs/add/operator/map";

import {Country} from '../models/country';

@Injectable()
export class CountryService {
	constructor(Http: Http) {
		this.Http = Http;
	}

	getCountries() {
		return new Observable(observable => {
			this.Http.get("https://restcountries.eu/rest/v1/all")
				.map(res => {
					res = res.json();
					return res.map(data => {
						return new Country(data);
					});
				})
				.subscribe(countries => {
					observable.next(countries);
				});
		});
	}
}
