import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/models/expense.model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
    this.loadExpenses();
  }

  loadExpenses() {
    this.expenseService.getExpenses().subscribe((data) => {
      this.expenses = data;
    });
  }

  deleteExpense(id: string) {
    this.expenseService.deleteExpense(id).subscribe(() => {
      this.expenses = this.expenses.filter((expense) => expense.id !== id);
    });
  }
}
