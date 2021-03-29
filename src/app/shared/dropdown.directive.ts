import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  @HostListener('click', ['$event'])
  toggleOpen(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'block');
  }
}
