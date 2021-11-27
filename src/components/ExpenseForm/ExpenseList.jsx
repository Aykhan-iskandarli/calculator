import React from "react";
import "./expense.css";
import Item from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, handleEdit, handleDelete, clearExpenses }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => (
          <Item key={expense.id} expense={expense} handleEdit={handleEdit} handleDelete={handleDelete} />
        ))}
      </ul>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {expenses.length > 0 && (
          <button className="btn" onClick={clearExpenses}>
            clear expenses <MdDelete className="btn-icon"  />
          </button>
        )}
      </div>
    </>
  );
};

export default ExpenseList;
