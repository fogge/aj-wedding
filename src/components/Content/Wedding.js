import React from "react";
import CustomList from "./CustomList";

const Wedding = () => {
  const listItemsInfo = [
    { text: "Vi gifter oss här å festar här!", fontAwesome: "" },
    { text: "Mat är gott!", fontAwesome: "" },
    { text: "Lorem ipsum seiv Aq rle", fontAwesome: "" },
    { text: "Mer info här...", fontAwesome: "" },
    { text: "Vi gifter oss här å festar här!", fontAwesome: "" },
    { text: "Mat är gott!", fontAwesome: "" },
    { text: "Lorem ipsum seiv Aq rle", fontAwesome: "" },
    { text: "Mer info här...", fontAwesome: "" }
  ];

  const listItemsPresents = [
    { text: "Pengar", fontAwesome: "fas fa-money-bill-wave" },
    { text: "Koenigsegg Jesko", fontAwesome: "fas fa-car" },
    { text: "Boeing AH-64 Apache", fontAwesome: "fas fa-helicopter" },
    { text: "Sveriges Kungahus", fontAwesome: "fas fa-home" }
  ];

  return (
    <>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </h2>

      <div className="boxes">
        <div className="box">
          <h3>Snabbinfo:</h3>

          <CustomList listItems={listItemsInfo} />
        </div>

        <div className="box">
          <h3>Presenter:</h3>

          <CustomList listItems={listItemsPresents} />
        </div>
      </div>
    </>
  );
};

export default Wedding;