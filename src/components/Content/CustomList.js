import React from "react";

const CustomList = ({ listItems }) => {
  return (
    <ul class="fa-ul">
      {listItems.map(listItem => (
        <li>
          <span class="fa-li">
            <i class={listItem.fontAwesome ? listItem.fontAwesome : "far fa-check-square"}></i>
          </span>
          {listItem.text}
        </li>
      ))}
    </ul>
  );
};
export default CustomList;
