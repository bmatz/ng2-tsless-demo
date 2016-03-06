export class Album {
	constructor(id, name, artist, url, images, songs = []) {
		this.id = id;
		this.name = name;
		this.artist = artist;
		this.url = url;
		this.images = images;
		this.songs = songs;
	}

	getImage(size) {
		let image = this.images.find((image) => {
			if (image['size'] == size) {
				return image;
			}
		});
		return image ? image['#text'] : '';
	}
}
