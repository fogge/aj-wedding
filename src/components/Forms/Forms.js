import React from "react";
import "./Forms.scss";

const Forms = () => {
  const submit = e => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwsX4NV86dYE41W8Fq3VaD4wHxNQJ8Aozkp-P1j30StViFS7Koa/exec";
    const form = document.forms["submit-to-google-sheet"];

    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(response => console.log("Success!", response))
      .catch(error => console.error("Error!", error.message));
  };

  return (
    <>
      <form name="submit-to-google-sheet" onSubmit={submit}>
        <label>
          <p>Email:</p>
          <input name="email" type="email" placeholder="Email" required />
        </label>
        <label>
          <p>Förnamn:</p>
          <input name="firstName" type="text" placeholder="Förnamn" required />
        </label>

        <label>
          <p>Efternamn:</p>
          <input name="lastName" type="text" placeholder="Efternamn" required />
        </label>
        <button type="submit">Skicka</button>
      </form>
    </>
  );
};

export default Forms;
