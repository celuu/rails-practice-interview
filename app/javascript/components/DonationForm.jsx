import React, { useEffect, useState } from "react";

export const DonationForm = ({users, churches}) => {
  const [userId, setUserId] = useState(null);
  const [churchId, setChurchId] = useState(null);
  const [amount, setAmount] = useState(1);

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("/donations", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]')?.content
      },
      body: JSON.stringify({
        donation: {
          user_id: userId,
          church_id: churchId,
          amount: amount
        }
      })
    })
    .then((res) => {
      if(res.ok) {
        alert("success")
      } else {
            res.json().then((data) => console.log("Validation errors:", data));

        alert("error" + res.status)
      }
    })
    .catch((err) => {
      if (err) {
        alert(err)
      }
    })
  }


  return (
    <form
    onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      
      <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
        <p>User</p>
        <select name="userId" onChange={(e) => setUserId(e.target.value)}>
          <option value="">---</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
        <p>Church</p>
        <select name="churchId" onChange={(e) => setChurchId(e.target.value)}>
          <option value="">---</option>
          {churches.map((church) => (
            <option key={church.id} value={church.id}>
              {church.name}
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
        <p>Amount</p>
        <input
          type="number"
          name="amount"
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <button type="submit">
          Create Donation
        </button>
      </div>
    </form>
  );
}