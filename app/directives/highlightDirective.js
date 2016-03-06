import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
    selector: '[highlight]',
    host: {
        '(mouseenter)' : 'onMouseEnter()',
        '(mouseleave)' : 'onMouseLeave()',
        '(mousedown)'  : 'onMouseDown()',
        '(mouseup)'    : 'onMouseUp()'
    }
})
export class HighlightDirective {
    @Input() hoverColor;
    @Input() set activeColor(color) {
        this._activeColor = color || this._activeColor;
    }

    constructor(ElementRef: ElementRef) {
        this.ElementRef = ElementRef;
        this.activeColor = "whitesmoke";
        this.originalBackground = ElementRef.nativeElement.style.backgroundColor;
    }

    onMouseEnter() {
        this.setElementColor(this.hoverColor);
    }

    onMouseLeave() {
        this.setElementColor(this.originalBackground);
    }

    onMouseDown() {
        this.setElementColor(this._activeColor);
    }

    onMouseUp() {
        this.setElementColor(this.originalBackground);
    }

    setElementColor(color) {
        this.ElementRef.nativeElement.style.backgroundColor = color;
    }
}
