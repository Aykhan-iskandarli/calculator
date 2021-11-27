import React from "react";
import "./expense.css"
import { MdSend } from "react-icons/md";

const ExpenseForm = ({amount,charge, handleCharge, handleAmount,handleSubmit, edit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            value={charge}
            placeholder="e.g. rent"
            onChange={handleCharge}
          />
        
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <div className="center">
        <button type="submit" className="btn">{
            edit? "edit" :"Submit"
        } <MdSend className="btn-icon"/></button>
      </div>
    </form>
  );
};

export default ExpenseForm;
