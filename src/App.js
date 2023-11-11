import { useState } from "react";
import FrindsList from "./frindsList";
import SplitBill from "./splitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 0,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: -5,
  },
];

export default function App() {
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [active, setActive] = useState(null);
  const [select, setSelect] = useState(null);
  const [user, setUser] = useState(true);
  const [billValue, setBillValue] = useState(null);
  const [expenseValue, setExpenselValue] = useState(null);

  return (
    <div
      className="d-flex justify-content-center m-auto align-items-center gap-5 p-sm-4 p-3 flex-wrap-reverse"
      style={{ minHeight: "100vh" }}
    >
      <FrindsList
        list={friendsList}
        active={active}
        setActive={setActive}
        select={select}
        setSelect={setSelect}
        friendsList={friendsList}
        setFriendsList={setFriendsList}
        setBillValue={setBillValue}
        setUser={setUser}
        setExpenselValue={setExpenselValue}
        user={user}
      ></FrindsList>
      {active ? (
        <SplitBill
          select={select}
          billValue={billValue}
          setBillValue={setBillValue}
          expenseValue={expenseValue}
          setExpenselValue={setExpenselValue}
          user={user}
          setUser={setUser}
          setFriendsList={setFriendsList}
          setActive={setActive}
        ></SplitBill>
      ) : null}
    </div>
  );
}
