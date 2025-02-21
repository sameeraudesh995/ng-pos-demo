import {Component, inject, model} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-customer-delete-model',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './customer-delete-model.component.html',
  styleUrl: './customer-delete-model.component.scss'
})
export class CustomerDeleteModelComponent {
  readonly dialog = inject(MatDialogRef<CustomerDeleteModelComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

}
