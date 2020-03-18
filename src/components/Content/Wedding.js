import React from "react";
import CustomList from "./CustomList";
import { listItemsInfo } from "../Utility/listItemsInfo";

const Wedding = () => {
  return (
    <>
      <div className="intro-text">
        <h2>Härmed har vi nöjet att inbjuda Er till vigselakten mellan</h2>
        <h2 className="names">
          Alexander Welin
          <br />
          och
          <br />
          Josefina Kristiansson
        </h2>
        <p>
          Ni är välkomna till Sörgården i Flyinge lördagen den 5e september,
          klockan 16:00
          <br />
          Om vädret tillåter sker vigseln utomhus. Detta firar vi sen med en
          storartad fest!
          <br />
          O.S.A. senast 1 juni 2020
        </p>
      </div>

      <div className="boxes">
        <div className="box">
          <h3>Snabbinfo:</h3>
          <CustomList listItems={listItemsInfo} />
        </div>

        <div className="pictures">
          <img src="aj1.png" className="pic1" alt="Alex och Josefina" />
          <img src="aj2.png" className="pic2" alt="Alex och Josefina" />
          <img src="aj3.png" className="pic3" alt="Alex och Josefina" />
          <img src="aj4.png" className="pic4" alt="Alex och Josefina" />
          <img src="aj5.png" className="pic5" alt="Alex och Josefina" />
          <img src="aj6.png" className="pic6" alt="Alex och Josefina" />
        </div>
      </div>
    </>
  );
};

export default Wedding;
