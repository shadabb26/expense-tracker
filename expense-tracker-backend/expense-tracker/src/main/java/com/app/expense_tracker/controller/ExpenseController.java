package com.app.expense_tracker.controller;

import com.app.expense_tracker.model.Expense;
import com.app.expense_tracker.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ExpenseController {

    @Autowired
    ExpenseService expenseService;
    @GetMapping("/expense/{id}")
    public Expense findExpenseById(@PathVariable int id) throws Exception {
        return expenseService.findExpenseById(id);
    }

    @GetMapping("/expenses")
    public List<Expense> getAllExpense(){
        return expenseService.getAllExpenses();
    }

    @PostMapping("/expense")
    public Expense addExpense(@RequestBody Expense expense){
        return expenseService.createExpense(expense);
    }

    @PatchMapping("/expense/{id}")
    public Expense updateExpense(@PathVariable int id,@RequestBody Expense updatedExpense) throws Exception {
        return expenseService.updateExpense(id,updatedExpense);
    }

    @DeleteMapping("/expense/{id}")
    public boolean deleteExpense(@PathVariable int id){
        return expenseService.deleteExpense(id);
    }

    @GetMapping("/expense/total")
    public float totalExpense(){
        return expenseService.totalSpend();
    }


}
