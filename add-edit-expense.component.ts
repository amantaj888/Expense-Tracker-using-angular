import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/models/expense.model';

@Component({
  selector: 'app-add-edit-expense',
  templateUrl: './add-edit-expense.component.html',
  styleUrls: ['./add-edit-expense.component.css'],
})
export class AddEditExpenseComponent implements OnInit {
  expense: Expense = {
    id: '',
    title: '',
    amount: 0,
    category: '',
    date: '',
  };
  isEditMode = false;

  constructor(
    private expenseService: ExpenseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const expenseId = this.route.snapshot.paramMap.get('id');
    if (expenseId) {
      this.isEditMode = true;
      this.expenseService.getExpenseById(expenseId).subscribe((data) => {
        this.expense = data;
      });
    }
  }

  submitExpense() {
    if (this.isEditMode) {
      this.expenseService.updateExpense(this.expense).subscribe(() => {
        this.router.navigate(['/expenses']);
      });
    } else {
      this.expense.id = Math.random().toString(36).substr(2, 9);
      this.expenseService.addExpense(this.expense).subscribe(() => {
        this.router.navigate(['/expenses']);
      });
    }
  }
}
