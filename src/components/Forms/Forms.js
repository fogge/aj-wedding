import React, { useReducer, useState } from "react";
import "./Forms.scss";
import Modal from "../Utility/Modal";
import { Loader } from "../Utility/Loader";
require('dotenv').config()
const NAME = "name";
const EMAIL = "email";
const FOOD = "food";
const PHONE_NUMBER = "phoneNumber";

const Forms = () => {
  const [loader, setLoader] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [thankModalOpen, setThankModalOpen] = useState(false);
  const [password, setPassword] = useState("");

  const initialState = [{ name: "", email: "", food: "", phoneNumber: "" }];

  function reducer(state, action) {
    const newState = [...state];
    switch (action.type) {
      case NAME:
        state[action.index].name = action.value;
        return newState;
      case EMAIL:
        state[action.index].email = action.value;
        return newState;
      case FOOD:
        state[action.index].food = action.value;
        return newState;
      case PHONE_NUMBER:
        state[action.index].phoneNumber = action.value;
        return newState;
      case "addNew":
        return [...state, { name: "", email: "", food: "", phoneNumber: "" }];
      case "reset":
        return initialState;
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  const submit = () => {
    setConfirmationModalOpen(false);
    setLoader(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwsX4NV86dYE41W8Fq3VaD4wHxNQJ8Aozkp-P1j30StViFS7Koa/exec";

    const testForm = state.map((inputValues, i) => {
      const newFormData = new FormData();
      newFormData.set(NAME, inputValues.name);
      newFormData.set(EMAIL, inputValues.email);
      newFormData.set(FOOD, inputValues.food);
      newFormData.set(PHONE_NUMBER, inputValues.phoneNumber);
      return newFormData;
    });

    Promise.all(
      testForm.map(formData =>
        fetch(scriptURL, { method: "POST", body: formData })
      )
    )
      .then(response => {
        setLoader(false);
        dispatch({ type: "reset" });
        setThankModalOpen(true);
      })
      .catch(error => {
        setLoader(false);
        setErrorModalOpen(true);
      });
  };

  const confirmationRender = () => {
    return (
      <>
        <div class="confirmation">
          <h2>
            Hej. Vi ser fram emot att fira vårt bröllop med dig! Vänligen
            kontrollera så allting stämmer!
          </h2>
          {state.map((guest, i) => (
            <>
              <h3>Gäst: {guest.name}</h3>
              <p>Namn: {guest.name}</p>
              <p>Email: {guest.email ? guest.email : "-"}</p>
              <p>
                Telefonnummer: {guest.phoneNumber ? guest.phoneNumber : "-"}
              </p>
              <p>Mat: {guest.food ? guest.food : "-"}</p>
            </>
          ))}
        </div>
        <form class="password">
          <label>
            <i
              className={`fas ${
                password.toUpperCase() === process.env.REACT_APP_PASSWORD ? "fa-unlock" : "fa-lock"
              }`}
            ></i>
            <input
              name="password"
              type="password"
              placeholder="Skriv in lösenordet som finns på inbjudan"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </form>
      </>
    );
  };

  const renderInputFields = () =>
    state.map((formData, i) => (
      <div key={i}>
        <p>{formData.name ? `Gäst: ${formData.name}` : `Gäst ${i + 1}`}</p>
        <label>
          <i className="fas fa-user"></i>
          <input
            name={NAME}
            type="text"
            placeholder="För- och efternamn"
            value={formData.name}
            onChange={e =>
              dispatch({ type: "name", value: e.target.value, index: i })
            }
          />
        </label>

        <label>
          <i className="fas fa-phone-alt"></i>
          <input
            name={PHONE_NUMBER}
            type="tel"
            placeholder="Telefonnummer"
            value={formData.phoneNumber}
            onChange={e =>
              dispatch({ type: "phoneNumber", value: e.target.value, index: i })
            }
          />
        </label>

        <label>
          <i className="fas fa-envelope"></i>
          <input
            name={EMAIL}
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={e =>
              dispatch({ type: "email", value: e.target.value, index: i })
            }
          />
        </label>

        <label>
          <i className="fas fa-utensils"></i>
          <input
            name={FOOD}
            type="text"
            placeholder="Allergier och specialkost"
            value={formData.food}
            onChange={e =>
              dispatch({ type: "food", value: e.target.value, index: i })
            }
          />
        </label>
      </div>
    ));

  return (
    <>
      {errorModalOpen && (
        <Modal
          content={<h2>Någonting gick fel :(. Pröva igen.</h2>}
          confirm={() => setErrorModalOpen(false)}
          decline={null}
          confirmText="Ok"
        />
      )}
      {thankModalOpen && (
        <Modal
          content={
            <h2>
              Tack för att du osade! Du/ni har nu gått med för att fira med oss
              den 5e september. Ses då!
            </h2>
          }
          confirm={() => setThankModalOpen(false)}
          decline={null}
          confirmText="Ok"
        />
      )}
      {confirmationModalOpen && (
        <Modal
          content={confirmationRender()}
          confirm={submit}
          decline={() => setConfirmationModalOpen(false)}
          confirmText="Nu osar vi!"
          declineText="Inte riktigt klar.."
          confirmDisabled={password.toUpperCase() !== process.env.REACT_APP_PASSWORD}
        />
      )}
      {loader && <Loader />}

      <form>{renderInputFields()}</form>

      <div className="button__container">
        <button onClick={() => dispatch({ type: "addNew" })}>
          Lägg till fler gäster
        </button>
        <button onClick={() => setConfirmationModalOpen(true)}>Osa!</button>
      </div>
    </>
  );
};

export default Forms;
