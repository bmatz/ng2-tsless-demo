import {Component, Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

import {PaginationComponent} from './paginationComponent';
import {Album} from '../models/album';
import {MusicService} from '../services/musicService';
import {HighlightDirective} from '../directives/highlightDirective';

@Component({
	selector : 'albumListComponent',
	template : `
		<ul class="media-list">
			  <li class="media" *ngFor="#album of albums" [routerLink]="['Album', { id : album.id }]" highlight [hoverColor]="'lightgray'" [activeColor]="'whitesmoke'">
				<div class="media-left">
				  <a href="#">
					<img class="media-object" [src]="album.getImage(albumImageSize)" >
				  </a>
				</div>
				<div class="media-body">
				  <h4 class="media-heading">{{album.name}}</h4>
				  {{album.artist}}
				</div>
			  </li>
		</ul>
		<paginationComponent [pager]="pager" [pathName]="'AlbumList'"></paginationComponent>
	`,
	providers  : [MusicService],
	directives : [ROUTER_DIRECTIVES, PaginationComponent, HighlightDirective]
})
export class AlbumListComponent {
	constructor(MusicService: MusicService, RouteParams: RouteParams) {
		this.MusicService = MusicService;
		this.albumImageSize = 'medium';
		this.albumsSearch(RouteParams.get('query'), RouteParams.get('page'));
	}

	albumsSearch(query, page) {
		this.MusicService.albumsSearch(query, page)
			.subscribe(results => {
				this.albums = results.albums;
				this.pager = results.pager;
			})
	}
}
