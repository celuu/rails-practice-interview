import React from "react"
export const ShowDonations = ({donations, total_donation, by_church}) => {
  console.log(by_church)
  return (
    <>
      <p>Total Donation: ${total_donation}</p>

      {Object.entries(by_church).map(([churchName, amount]) => (
        <p key={churchName}>
          {churchName}: ${amount}
        </p>
      ))}

      <p>Show recent donations</p>
      {donations.map((donation) => (
        <p>
          Donated by: {donation.user.name} to {donation.church.name} for $
          {donation.amount}
        </p>
      ))}
    </>
  );

}