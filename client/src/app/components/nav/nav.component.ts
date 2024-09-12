import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateExpenseComponent } from '../create-expense/create-expense.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private dialog: MatDialog) { }

  openCreateExpenseDialog() {
    const dialogRef = this.dialog.open(CreateExpenseComponent, {
      width: '50%'
    });
  }

}
