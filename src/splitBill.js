import { useState } from "react";

export default function SplitBill({
  select,
  billValue,
  setBillValue,
  expenseValue,
  setExpenselValue,
  user,
  setUser,
  setFriendsList,
  setActive,
}) {
  const friendExpense = billValue - expenseValue;
  function subForm(f) {
    f.preventDefault();

    if (billValue !== null) {
      setFriendsList((list) =>
        list.map((f) =>
          f === select
            ? {
                ...f,
                balance: user
                  ? f.balance - friendExpense
                  : f.balance + expenseValue,
              }
            : f
        )
      );
      setActive(null);
      setBillValue(null);
      setExpenselValue(null);
      setUser(!user);
    }
  }

  return (
    <div
      className="split d-flex flex-column gap-5 p-5 flex-grow-1"
      style={{ maxWidth: "550px" }}
    >
      <h2 className="mb-4" style={{ fontSize: "28px" }}>
        SPLIT A BILL WITH {select.name.toUpperCase()}
      </h2>
      <form className="d-flex flex-column gap-5" onSubmit={subForm}>
        <div className="d-flex justify-content-between align-items-center">
          <label
            className="d-sm-block d-none"
            style={{ fontSize: "20px", fontWeight: "400" }}
          >
            💰 Bill value
          </label>
          <input
            onChange={(b) => setBillValue(Number(b.target.value))}
            value={billValue}
            className="col-5 flex-grow-1 flex-sm-grow-0"
            type="number"
            placeholder="Bill Value"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <label
            className="d-sm-block d-none"
            style={{ fontSize: "20px", fontWeight: "400" }}
          >
            🧍‍♀️ Your expense
          </label>
          <input
            onChange={(b) =>
              setExpenselValue(
                Number(b.target.value) > billValue
                  ? expenseValue
                  : Number(b.target.value)
              )
            }
            value={expenseValue}
            max={billValue}
            className="col-5 flex-grow-1 flex-sm-grow-0"
            type="number"
            placeholder="Your expense"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <label style={{ fontSize: "20px", fontWeight: "400" }}>
            👫 {select.name}'s expense
          </label>
          <h1 className="text-center col-5">{friendExpense}</h1>
        </div>
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
          <label className="" style={{ fontSize: "20px", fontWeight: "400" }}>
            🤑 Who is paying the bill
          </label>
          <select
            onChange={() => setUser(!user)}
            className="col-5 flex-grow-1 flex-sm-grow-0"
            type="number"
            value={user ? user : select}
          >
            <option value={user}>You</option>
            <option value={select}>{select.name}</option>
          </select>
        </div>
        <button
          className={`add col-sm-5 col-12 flex-grow-1 flex-sm-grow-0 align-self-end`}
          style={{
            padding: "7px",
            borderRadius: "12px",
            color: "white",
            fontSize: "18px",
            backgroundColor: "rgb(16 16 44)",
            outline: "none",
          }}
        >
          Split
        </button>
      </form>
    </div>
  );
}
