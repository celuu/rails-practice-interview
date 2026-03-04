import React from "react";
import ReactDOM from "react-dom/client";
import { DonationForm } from "./components/DonationForm";

document.addEventListener("turbo:load", () => {
  const form = document.getElementById("create-form")
  if (form) {
    const users = JSON.parse(form.dataset.users)
    const churches = JSON.parse(form.dataset.churches)
    const donation = JSON.parse(form.dataset.donation)

    const root = ReactDOM.createRoot(form)
    root.render(<DonationForm users={users} churches={churches} />)
  }
})