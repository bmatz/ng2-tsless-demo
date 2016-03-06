export class Pager {
	constructor(itemsPerPage, startIndex, totalResults, maxPages = 10) {
		let realMaxPages = Math.ceil(totalResults / itemsPerPage);
		if (realMaxPages <= maxPages) {
			this.pages = realMaxPages;
		} else {
			this.pages = maxPages;
		}
	}
}
