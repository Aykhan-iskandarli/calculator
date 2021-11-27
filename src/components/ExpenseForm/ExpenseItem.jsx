import React from "react";
import "./expense.css";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({ expense,handleDelete,handleEdit }) => {
  const { charge, id, amount } = expense;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount"> ${amount}</span>
      </div>
      <div className="change">
          <button className="edit-btn" onClick={()=>handleEdit(id)}><MdEdit/></button>
          <button className="delete-btn"  onClick={()=>handleDelete(id)}><MdDelete/></button>
      </div>
    </li>
  );
};

export default ExpenseItem;
