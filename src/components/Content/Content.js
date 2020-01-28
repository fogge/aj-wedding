import React from "react";
import "./Content.scss";
import Forms from "../Forms/Forms";
import Wedding from './Wedding';

const Content = ({ wedding }) => {
  return (
    <main>
      <div className="content">
        {wedding ? <Wedding /> : <Forms />}
      </div>
    </main>
  );
};

export default Content;
