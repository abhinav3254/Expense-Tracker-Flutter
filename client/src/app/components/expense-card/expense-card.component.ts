import { Component } from '@angular/core';
import { Expense } from 'src/app/interfaces/expense';
import { expenses } from 'src/app/constants/data';

@Component({
  selector: 'app-expense-card',
  templateUrl: './expense-card.component.html',
  styleUrls: ['./expense-card.component.scss']
})
export class ExpenseCardComponent {

  expense: Expense = expenses[0];

}
