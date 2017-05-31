import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navigationEvent = new EventEmitter<{newDestination: string}>();
  constructor() {
  }
  navigate(destination: string) {
    this.navigationEvent.emit({
      newDestination: destination
    });
  }

}
