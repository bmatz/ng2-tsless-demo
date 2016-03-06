import {Component, Inject} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {MusicService} from '../services/musicService';

@Component({
	selector : 'albumComponent',
	template : `
		<div class="album" *ngIf="album">
			<div class="page-header">
			  <h1>{{album.name}} <small>{{ album.artist }}</small></h1>
			</div>
			<div class="media">
			  <div class="media-left">
				<a href="#">
				  <img class="media-object" [src]="album.getImage(albumImageSize)">
				</a>
			  </div>
			  <div class="media-body">
				   <ul *ngFor="#song of album.songs">
						<li>{{ song.name}}</li>
				   </ul>
			  </div>
			</div>
		</div>
	`,
	providers : [MusicService]
})
export class AlbumComponent  {
	constructor(MusicService: MusicService, RouteParams: RouteParams) {
		this.MusicService = MusicService;
		this.albumImageSize = 'large';
		this.getAlbumInfo(RouteParams.get("id"));
	}

	getAlbumInfo(id) {
		this.MusicService.albumInfo(id)
			.subscribe(album => {
				this.album = album;
			})
	}
}
