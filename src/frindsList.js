import { useState } from "react";
import Friends from "./friends";

export default function FrindsList({
  list,
  active,
  setActive,
  setSelect,
  friendsList,
  setFriendsList,
  setExpenselValue,
  setBillValue,
  setUser,
  user,
}) {
  const [addFriend, setAddFriend] = useState(false);

  const [name, setName] = useState("");

  const [img, setimg] = useState("https://i.pravatar.cc/48");

  function subForm(b) {
    b.preventDefault();

    const newFriend = {
      id: Date.now(),
      name: name,
      image: img,
      balance: 0,
    };

    setFriendsList((l) => [...l, newFriend]);
    setAddFriend(false);
    setName("");
  }

  return (
    <div
      className="d-flex flex-column align-self-center mb-5 gap-3 col-md-5 flex-grow-1"
      style={{ maxWidth: "550px" }}
    >
      {friendsList.map((f, i) => (
        <Friends
          key={f.id}
          id={f.id}
          img={f.image}
          name={f.name}
          balance={f.balance}
          active={active}
          setActive={setActive}
          list={list}
          setSelect={setSelect}
          setBillValue={setBillValue}
          setUser={setUser}
          setExpenselValue={setExpenselValue}
          user={user}
        ></Friends>
      ))}
      {addFriend ? (
        <form
          onSubmit={subForm}
          className="d-flex p-4 py-5 mt-5 gap-5 align-items-start w-100"
          style={{ backgroundColor: " rgb(53, 48, 87)", borderRadius: "12px" }}
        >
          <div className="d-sm-flex d-none flex-column gap-5 mt-3">
            <h1 className="m-0">👫 Friend name</h1>
            <h1 className="m-0">🌄 Image URL</h1>
          </div>
          <div className="add-form d-flex flex-column flex-grow-1 gap-5">
            <input
              required
              type="text"
              value={name}
              placeholder="Friend Name"
              onChange={(v) => setName(v.target.value)}
            />
            <input type="text" value={img} onChange={() => img} />
            <button
              className="add"
              style={{
                padding: "7px",
                borderRadius: "12px",
                color: "white",
                fontSize: "18px",
                backgroundColor: "rgb(16 16 44)",
                outline: "none",
              }}
            >
              Add
            </button>
          </div>
        </form>
      ) : null}
      <button
        onClick={() => {
          setAddFriend((e) => !e);
        }}
        className="add align-self-center col-5 mt-5 me-4"
        style={{
          padding: "7px",
          borderRadius: "12px",
          color: "white",
          fontSize: "18px",
          backgroundColor: "rgb(16 16 44)",
          outline: "none",
        }}
      >
        {addFriend ? "Close" : "Add friend"}
      </button>
    </div>
  );
}
