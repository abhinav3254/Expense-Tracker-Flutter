import 'package:expense_tracker/widgets/expenses_list/expenses_list.dart';
import 'package:expense_tracker/models/expense.dart';
import 'package:flutter/material.dart';

class Expenses extends StatefulWidget {
  const Expenses({super.key});

  @override
  State<Expenses> createState() {
    return _ExpensesState();
  }
}

class _ExpensesState extends State<Expenses> {
  final List<Expense> _registeredExpenses = [
    Expense(
      title: 'Groceries',
      amount: 65.30,
      date: DateTime(2023, 9, 1),
      category: Category.food,
    ),
    Expense(
      title: 'Dinner at Restaurant',
      amount: 50.00,
      date: DateTime(2023, 9, 2),
      category: Category.food,
    ),
    Expense(
      title: 'Weekend Trip',
      amount: 150.75,
      date: DateTime(2023, 9, 3),
      category: Category.travel,
    ),
    Expense(
      title: 'Movie Tickets',
      amount: 30.00,
      date: DateTime(2023, 9, 4),
      category: Category.leisure,
    ),
    Expense(
      title: 'Office Supplies',
      amount: 40.20,
      date: DateTime(2023, 9, 5),
      category: Category.work,
    ),
    Expense(
      title: 'Coffee',
      amount: 5.50,
      date: DateTime(2023, 9, 5),
      category: Category.food,
    ),
    Expense(
      title: 'Flight Ticket',
      amount: 300.00,
      date: DateTime(2023, 9, 6),
      category: Category.travel,
    ),
    Expense(
      title: 'Concert Tickets',
      amount: 120.00,
      date: DateTime(2023, 9, 7),
      category: Category.leisure,
    ),
    Expense(
      title: 'Lunch with Colleagues',
      amount: 25.50,
      date: DateTime(2023, 9, 8),
      category: Category.food,
    ),
    Expense(
      title: 'Project Materials',
      amount: 75.80,
      date: DateTime(2023, 9, 9),
      category: Category.work,
    ),
  ];

  void _openAddExpenseOverlay() {
    showModalBottomSheet(
        context: context,
        builder: (ctx) {
          // return widget
          return const Text('Bottom Sheet!');
        });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Expense Tracker'),
        actions: [
          IconButton(
            onPressed: _openAddExpenseOverlay,
            icon: const Icon(Icons.add),
          ),
        ],
      ),
      body: Column(
        children: [
          const Text('Chart'),
          Expanded(
            child: ExpensesList(expenses: _registeredExpenses),
          ),
        ],
      ),
    );
  }
}
