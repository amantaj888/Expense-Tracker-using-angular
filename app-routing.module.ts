import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditExpenseComponent } from './components/add-edit-expense/add-edit-expense.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/expenses', pathMatch: 'full' },
  { path: 'expenses', component: ExpenseListComponent },
  { path: 'add', component: AddEditExpenseComponent },
  { path: 'edit/:id', component: AddEditExpenseComponent }, // For editing an existing expense
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
