import React from "react";
import ReactDOM from "react-dom/client";
import { ShowDonations } from "./components/ShowDonations";

document.addEventListener("turbo:load", () => {
  const ele = document.getElementById("show-donations");
  if (ele) {
    const donations = JSON.parse(ele.dataset.donations);
    const root = ReactDOM.createRoot(ele);
    root.render(<ShowDonations donations={donations} />);
  }
});
