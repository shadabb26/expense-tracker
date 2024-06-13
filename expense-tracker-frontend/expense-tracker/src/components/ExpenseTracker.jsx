import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [id, setId] = useState(null);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [edit, setEdit] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchExpenses();
    fetchTotal();
  }, []);

  async function fetchExpenses() {
    try {
      const response = await fetch("http://localhost:8080/expenses");
      if (response.ok) {
        const data = await response.json();
        setExpenses(Array.isArray(data) ? data : []);
      } else {
        console.error("Error fetching expenses:", response.statusText);
        setExpenses([]);
      }
    } catch (error) {
      console.error("Error fetching expenses:", error);
      setExpenses([]);
    }
  }

  async function fetchTotal() {
    try {
      const response = await fetch("http://localhost:8080/expense/total");
      if (response.ok) {
        const total = await response.json();
        setTotal(total);
      } else {
        setTotal(0);
      }
    } catch (error) {
      console.error("Error fetching total expense:", error);
      setTotal(0);
    }
  }

  async function onSubmit() {
    try {
      const data = {
        amount,
        description,
      };

      const response = await fetch("http://localhost:8080/expense", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setAmount("");
        setDescription("");
        fetchExpenses();
        fetchTotal();
        toast("Added Successfully!", {
          theme: "light",
          type: "success",
          position: "top-center",
          autoClose: 1000,
        });
      } else {
        console.error("Failed to add expense:", response.statusText);
        toast("Failed to add!", {
          theme: "light",
          type: "error",
          position: "top-center",
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error("Error adding expense:", error);
      toast("Error adding expense!", {
        theme: "light",
        type: "error",
        position: "top-center",
        autoClose: 1000,
      });
    }
  }

  async function handleEdit(id) {
    setId(id);
    setEdit(true);
    const expenseToEdit = expenses.find((expense) => expense.id === id);
    if (expenseToEdit) {
      setAmount(expenseToEdit.amount);
      setDescription(expenseToEdit.description);
    }
  }

  async function handleUpdate() {
    try {
      const data = {
        amount,
        description,
      };

      const response = await fetch(`http://localhost:8080/expense/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setEdit(false);
        setAmount("");
        setDescription("");
        setId(null);
        fetchExpenses(); // Update expenses after updating
        fetchTotal(); // Update total after updating
        toast("Updated Successfully!", {
          theme: "light",
          type: "success",
          position: "top-center",
          autoClose: 1000,
        });
      } else {
        console.error("Failed to update expense:", response.statusText);
        toast("Failed to update!", {
          theme: "light",
          type: "error",
          position: "top-center",
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error("Error updating expense:", error);
      toast("Error updating expense!", {
        theme: "light",
        type: "error",
        position: "top-center",
        autoClose: 1000,
      });
    }
  }

  async function handleDelete(id) {
    try {
      const response = await fetch(`http://localhost:8080/expense/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        fetchExpenses(); // Update expenses after deleting
        fetchTotal(); // Update total after deleting
        toast("Deleted Successfully!", {
          theme: "light",
          type: "success",
          position: "top-center",
          autoClose: 1000,
        });
      } else {
        console.error("Failed to delete expense:", response.statusText);
        toast("Failed to delete!", {
          theme: "light",
          type: "error",
          position: "top-center",
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Expense Tracker</h2>
      {!edit ? (
        <>
          <div className="form-group">
            <label htmlFor="amount">Amount Spent</label>
            <input
              type="text"
              className="form-control"
              value={amount}
              id="amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary m-1"
            onClick={onSubmit}
            disabled={amount.length <= 0 || description.length <= 0}
          >
            Add Expense
          </button>
          <button className="btn btn-danger m-1">
            Total Spend : <strong>{total}</strong>
          </button>
        </>
      ) : (
        <>
          <div className="form-group">
            <label htmlFor="amount">Amount Spent</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary m-1"
            onClick={handleUpdate}
            disabled={amount.length <= 0 || description.length <= 0}
          >
            Update Expense
          </button>
          <button disabled className="btn btn-danger m-1">
            Total Spend : {total}
          </button>
        </>
      )}

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((expense, index) => (
              <tr key={expense.id}>
                <td>{index + 1}</td>
                <td>{expense.amount}</td>
                <td>{expense.description}</td>
                <td>
                  <button
                    className="btn btn-warning m-1"
                    onClick={() => handleEdit(expense.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger m-1"
                    onClick={() => handleDelete(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No expenses found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTracker;
