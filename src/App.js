import "./App.css";
import React, { useState,useEffect } from "react";
import ExpenseList from "./components/ExpenseForm/ExpenseList";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import Alert from "./components/Alert/Alert";
import uuid from "react-uuid";

const initialExpenses = localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem('expenses')):[];


function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");

  // alert
  const [alert, setAlert] = useState({ show: false });

  //edit

  const [edit, setEdit] = useState(false)

  //edit item
  const [id, setId] = useState(0)

  useEffect(()=>{
    localStorage.setItem("expenses",JSON.stringify(expenses))
  })

  const handleCharge = (e) => {
    setCharge(e.target.value);
    console.log(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
    console.log(e.target.value);
  };

  const handleDelete = (id) => {
    const deleteItem = expenses.filter(item => item.id !== id)
  
    setExpenses(deleteItem)
    handleAlert({ type: "danger", text: "item deleted" });
  };

  const handleEdit = (id) => {
    let expense = expenses.find(item=> item.id === id)
    let {charge,amount} = expense
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
    setId(id)

  };
  const clearExpenses = () => {
   setExpenses([])
   handleAlert({ type: "danger", text: "all item deleted" });
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    if (charge !== "" && amount > 0) {

      if(edit){
        let tempExpenses = expenses.map(item=>(
          item.id === id ? {...item,charge,amount} : item
        ))
        setExpenses(tempExpenses)
        setEdit(false)
      }
      else{
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }
     
      setAmount("");
      setCharge("");
    } else {
      //alert message
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount value has to be bigger than zero  `,
      });
    }

    e.preventDefault();
  };

  return (
    <div className="center">
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>budget Calculator </h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          clearExpenses={clearExpenses}
        />
      </main>
      <h1>
        total spending :{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return acc + parseInt(curr.amount);
          }, 0)}
        </span>
      </h1>
    </div>
  );
}

export default App;
