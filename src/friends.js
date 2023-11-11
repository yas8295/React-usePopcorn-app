import { useState } from "react";

export default function Friends({
  id,
  name,
  img,
  balance,
  active,
  setActive,
  list,
  setSelect,
  setExpenselValue,
  setBillValue,
  setUser,
  user,
}) {
  const activeFriend = id === active;

  function selectFriend(id) {
    setActive(activeFriend ? null : id);
    setSelect(list.find((f) => f.id === id));
    setBillValue("");
    setExpenselValue("");
    setUser(true);
  }

  return (
    <div
      className={`${
        activeFriend ? "active" : ""
      } friends d-flex justify-content-between p-5`}
    >
      <div className="d-flex flex-column flex-sm-row gap-sm-5 gap-4 align-items-start align-items-sm-center">
        <img src={img} alt="" width={"60px"} style={{ borderRadius: "50%" }} />
        <div className="d-flex flex-column gap-3">
          <h1 className="m-0">{name}</h1>
          <p
            className={`m-0 ${
              balance < 0 ? "deposit" : balance > 0 ? "credit" : ""
            }`}
            style={{ fontSize: "19px" }}
          >
            {balance < 0
              ? `You owe ${name} ${Math.abs(balance)}$`
              : balance === 0
              ? `You and ${name} are even`
              : `${name} owes you ${balance}$`}
          </p>
        </div>
      </div>
      <button
        onClick={() => selectFriend(id)}
        className={`${
          activeFriend ? "active" : ""
        } align-self-sm-center align-self-start col-sm-3 col-4`}
        style={{
          padding: "7px",
          borderRadius: "12px",
          color: "white",
          fontSize: "18px",
          backgroundColor: "rgb(16 16 44)",
          outline: "none",
        }}
      >
        {activeFriend ? "Close" : "Select"}
      </button>
    </div>
  );
}
