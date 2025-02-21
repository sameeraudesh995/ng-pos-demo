import {Component, EventEmitter, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-customer-toolbar',
  standalone: true,
  imports: [
    MatIcon,
    MatButton
  ],
  templateUrl: './customer-toolbar.component.html',
  styleUrl: './customer-toolbar.component.scss'
})
export class CustomerToolbarComponent {

  @Output()
  eventEmitter:EventEmitter<any> = new EventEmitter<any>();


  getText(value: string | undefined) {
    this.eventEmitter.emit(value);
  }
}
