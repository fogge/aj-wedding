import React from "react";

const CustomList = ({ listItems }) => {
  return (
    <ul className="fa-ul">
      {listItems.map((listItem, i) => (
        <li key={listItem.text + i}>
          {listItem.type === "linebreak" ? (
            <span className="line-break" />
          ) : (
            <>
              <span className="fa-li">
                <i
                  className={
                    listItem.fontAwesome
                      ? listItem.fontAwesome
                      : "far fa-check-square"
                  }
                ></i>
              </span>
              {listItem.text}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
export default CustomList;
