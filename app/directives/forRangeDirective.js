import {Directive, Input, TemplateRef, ViewContainerRef, View, EmbeddedViewRef} from 'angular2/core';

@Directive({
	selector : '[forRange]'
})
export class ForRangeDirective {
	@Input() set forRange(value) {
		this.render(value);
	}

	constructor(TemplateRef: TemplateRef, ViewContainerRef: ViewContainerRef) {
		this.TemplateRef = TemplateRef;
		this.ViewContainerRef = ViewContainerRef;
	}

	render(value) {
		for (let i = 0; i < value; i++) {
			let view = this.ViewContainerRef.createEmbeddedView(this.TemplateRef, i);
			view.setLocal('index', i);
		}
	}
}
