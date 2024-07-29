import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [expandForm, setExpandForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expense);
  };

  const formExpandHandler = () => {
    setExpandForm(true);
  };

  const formUnExpandHandler = () => {
    setExpandForm(false);
  };

  return (
    <div className="new-expense">
      {!expandForm && <button onClick={formExpandHandler}>Add Expense</button>}
      {expandForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          formUnExpand={formUnExpandHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
