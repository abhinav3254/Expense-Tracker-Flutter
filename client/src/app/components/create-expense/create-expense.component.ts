import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { expensesType } from 'src/app/constants/expenseTypes';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.scss']
})
export class CreateExpenseComponent implements OnInit {

  createExpenseForm!: FormGroup;

  expenseCategories: string[] = expensesType;

  constructor(
    private dialogRef: MatDialogRef<CreateExpenseComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createExpenseForm = this.fb.group({
      title: ['', Validators.required],
      amount: [0, Validators.required],
      date: [Date.now(), Validators.required],
      category: ['', Validators.required],
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  submit() {
    console.log(this.createExpenseForm.value);
  }

}
