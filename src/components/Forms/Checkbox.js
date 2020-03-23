import React from "react";
import { ReactComponent as CheckIcon } from "./check.svg";

import "./Checkbox.scss";

const Checkbox = ({ onChange, name, labelText, checked }) => {
  return (
    <div className="checkbox-holder">
      <div className="root">
        <label htmlFor={name}>
          <input
            className="input"
            id={name}
            type="checkbox"
            onChange={onChange}
            checked={checked}
            aria-checked={checked}
          />
          <div className={checked ? "fill-true" : "fill-false"}>
            <CheckIcon />
          </div>
        </label>
      </div>
      <div className="label-holder">
        <label htmlFor={name}>{labelText}</label>
      </div>
    </div>
  );
};

export default Checkbox;
