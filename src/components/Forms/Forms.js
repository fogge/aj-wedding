import React, { useReducer, useState } from "react";
import "./Forms.scss";
import Modal from "../Utility/Modal";
import { Loader } from "../Utility/Loader";
import { constants, modals } from "../Utility/constants";
require("dotenv").config();

const { NAME, EMAIL, FOOD, PHONE_NUMBER, DELETE, ADD_NEW, RESET } = constants;
const { CONFIRMATION, ERROR, THANK } = modals;

const Forms = () => {
  const [loader, setLoader] = useState(false);
  const [modalOpen, setModalOpen] = useState("");
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
      case DELETE:
        return newState.filter((_, i) => i !== action.id);
      case ADD_NEW:
        return [...state, { name: "", email: "", food: "", phoneNumber: "" }];
      case RESET:
        return initialState;
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = () => {
    setModalOpen("");
    setLoader(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwsX4NV86dYE41W8Fq3VaD4wHxNQJ8Aozkp-P1j30StViFS7Koa/exec";

    const testForm = state.map(inputValues => {
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
        dispatch({ type: RESET });
        setModalOpen(THANK);
      })
      .catch(error => {
        setLoader(false);
        setModalOpen(ERROR);
      });
  };

  const confirmationRender = () => {
    return (
      <>
        <div className="confirmation">
          <h2>
            Hej. Vi ser fram emot att fira vårt bröllop med dig! Vänligen
            kontrollera så allting stämmer!
          </h2>
          {state.map((guest, i) => (
            <div key={i}>
              <h3>Gäst: {guest.name}</h3>
              <p>Namn: {guest.name}</p>
              <p>Email: {guest.email ? guest.email : "-"}</p>
              <p>
                Telefonnummer: {guest.phoneNumber ? guest.phoneNumber : "-"}
              </p>
              <p>Mat: {guest.food ? guest.food : "-"}</p>
            </div>
          ))}
        </div>
        <form className="password">
          <label>
            <i
              className={`fas ${
                password.toUpperCase() === process.env.REACT_APP_PASSWORD
                  ? "fa-unlock"
                  : "fa-lock"
              }`}
            ></i>
            <input
              name="password"
              type="password"
              autoComplete="new-password"
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
        <div className="guest__container">
          <p>{formData.name ? `Gäst: ${formData.name}` : `Gäst ${i + 1}`}</p>
          <i
            className="fas fa-trash"
            onClick={() => dispatch({ type: DELETE, id: i })}
          ></i>
        </div>
        <label>
          <i className="fas fa-user"></i>
          <input
            name={NAME}
            type="text"
            placeholder="För- och efternamn"
            value={formData.name}
            onChange={e =>
              dispatch({ type: NAME, value: e.target.value, index: i })
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
              dispatch({ type: PHONE_NUMBER, value: e.target.value, index: i })
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
              dispatch({ type: EMAIL, value: e.target.value, index: i })
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
              dispatch({ type: FOOD, value: e.target.value, index: i })
            }
          />
        </label>
      </div>
    ));

  const isButtonDisabled = () =>
    !state.length || state.some(formData => !(formData.name.length > 1));

  return (
    <>
      {modalOpen === ERROR && (
        <Modal
          content={<h2>Någonting gick fel :(. Pröva igen.</h2>}
          confirm={() => setModalOpen("")}
          decline={null}
          confirmText="Ok"
        />
      )}
      {modalOpen === THANK && (
        <Modal
          content={
            <h2>
              Tack för att du osade! Du/ni har nu gått med för att fira med oss
              den 5e september. Ses då!
            </h2>
          }
          confirm={() => setModalOpen("")}
          decline={null}
          confirmText="Ok"
        />
      )}
      {modalOpen === CONFIRMATION && (
        <Modal
          content={confirmationRender()}
          confirm={submit}
          decline={() => setModalOpen("")}
          confirmText="Nu osar vi!"
          declineText="Inte riktigt klar.."
          confirmDisabled={
            password.toUpperCase() !== process.env.REACT_APP_PASSWORD
          }
        />
      )}
      {loader && <Loader />}

      <form>{renderInputFields()}</form>

      <div className="button__container">
        <button onClick={() => dispatch({ type: ADD_NEW })}>
          Lägg till fler gäster
        </button>
        <button
          disabled={isButtonDisabled()}
          onClick={() => setModalOpen(CONFIRMATION)}
        >
          Osa!
        </button>
      </div>
    </>
  );
};

export default Forms;
