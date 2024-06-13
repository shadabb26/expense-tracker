package com.app.expense_tracker.repo;

import com.app.expense_tracker.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ExpenseRepo extends JpaRepository<Expense,Integer> {
    @Query("SELECT SUM(e.amount) FROM Expense e")
    float findSum();
}
