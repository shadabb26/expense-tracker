import Navbar from "../components/Navbar";
import ExpenseTracker from "../components/ExpenseTracker";

import LoginPage from "./LoginPage";
const Expense = () => {
  const isLoggedIn = localStorage.getItem("login");
  return (
    <>
      {isLoggedIn && (
        <>
          <Navbar />
          <ExpenseTracker />
        </>
      )}

      {!isLoggedIn && 
        <LoginPage/>
      }
    </>
  );
};

export default Expense;
