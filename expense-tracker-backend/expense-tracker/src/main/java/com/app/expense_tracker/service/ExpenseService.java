package com.app.expense_tracker.service;

import com.app.expense_tracker.model.Expense;
import com.app.expense_tracker.repo.ExpenseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepo expenseRepo;

    public Expense createExpense(Expense expense){
        return expenseRepo.save(expense);
    }

    public List<Expense> getAllExpenses(){
        return expenseRepo.findAll();
    }


    public Expense findExpenseById(int id) throws Exception{
        Optional<Expense> expense = expenseRepo.findById(id);
        if(expense.isPresent()){
            return expense.get();
        }else {
            throw new Exception("Expense Not found by Id !");
        }
    }

    public Expense updateExpense(int id,Expense updatedExpense) throws Exception {
        Optional<Expense> existingExpenseOptional = expenseRepo.findById(id);
        if(existingExpenseOptional.isPresent()){
            Expense existingExpense = existingExpenseOptional.get();
            existingExpense.setAmount(updatedExpense.getAmount());
            existingExpense.setDescription(updatedExpense.getDescription());
            return expenseRepo.save(existingExpense);
        }else{
            throw new Exception("ID not found !");
        }
    }

    public boolean deleteExpense(int id) {
        Optional<Expense> expense = expenseRepo.findById(id);
        if (expense.isEmpty()) {
            return false;
        } else {
            expenseRepo.delete(expense.get());
            return true;
        }
    }


    public float totalSpend(){
        float sum = expenseRepo.findSum();
        if(sum<=0){
            return 0.0f;
        }
        return sum;
    }

}