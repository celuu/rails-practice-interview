import React from "react"
export const ShowDonations = ({donations}) => {
  console.log(donations)
  return (
    <>
      <p>Show recent donations</p>
      {donations.map((donation) => (
        <p>Donated by: {donation.user.name} to {donation.church.name} for ${donation.amount}</p>
      ))}
    </>
  );

}