import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import "rxjs/add/operator/map";
import {Album} from '../models/album';
import {Song} from '../models/song';
import {Pager} from '../models/pager';

@Injectable()
export class MusicService {
	constructor(Http: Http) {
		this.Http = Http;
		this.apiId = '34f4b6414a86a36295f43db1600772d0';
	}

	albumsSearch(query, page = 0) {
		return new Observable(observable => {
			let pageParam = page + 1;
			let url = 'http://ws.audioscrobbler.com/2.0/?method=album.search&album=' + query + "&format=json&api_key=" + this.apiId + "&page=" + pageParam;
			this.Http.get(url)
				.map(res => {
					res = res.json().results;
					let albums = res.albummatches.album.map(album => {
						return new Album(album['mbid'], album['name'], album['artist'], album['url'], album['image']);
					});
					let pager = new Pager(res['opensearch:itemsPerPage'], res['opensearch:startIndex'], res['opensearch:totalResults']);
					return {
						albums : albums,
						pager  : pager
					}
				})
				.subscribe(res => {
					observable.next(res);
				});
		});
	}

	albumInfo(id) {
		return new Observable(observable => {
			let url = 'http://ws.audioscrobbler.com/2.0/?method=album.getInfo&mbid=' + id + "&format=json&api_key=" + this.apiId;
			this.Http.get(url)
				.map(res => {
					res = res.json().album;

					var songs = res.tracks.track.map(song => {
						return new Song(song.name);
					});

					return new Album(res['mbid'], res['name'], res['artist'], res['url'], res['image'], songs);
				})
				.subscribe(res => {
					observable.next(res);
				})
		});
	}

}
