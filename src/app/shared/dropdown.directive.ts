import {Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';
@Directive( {
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input() dropdownToggle: boolean;
  @HostListener('click') toggleDropdown() {
    if (!this.dropdownToggle) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
      this.dropdownToggle = true;
    }else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
      this.dropdownToggle = false;
    }
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

}
