import React from "react";
import ReactDOM from "react-dom/client";
import { ShowDonations } from "./components/ShowDonations";

document.addEventListener("turbo:load", () => {
  const ele = document.getElementById("show-donations");
  if (ele) {
    const donations = JSON.parse(ele.dataset.donations);
    const total_donation = JSON.parse(ele.dataset.totalDonation);
    const by_church = JSON.parse(ele.dataset.byChurch);
    const root = ReactDOM.createRoot(ele);
    root.render(<ShowDonations donations={donations} total_donation={total_donation} by_church={by_church} />);
  }
});
