import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropDownDirective {
	@HostBinding('class.open') isOpen: boolean = false;

	// @HostListener('click') toggleOpen() {
	// 	this.isOpen = !this.isOpen;
	// }

	@HostListener('document:click', ['$event']) toggleOpen() {
	    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
	}

	constructor(private elRef: ElementRef){}
}