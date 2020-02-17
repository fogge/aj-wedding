import React from "react";
import CustomList from "./CustomList";

const Wedding = () => {
  const listItemsInfo = [
    { text: "Vigsel och fest på samma plats!", fontAwesome: "" },
    { text: "Var: Sörgården i Flyinge", fontAwesome: "fas fa-map-marker-alt" },
    { text: "När: 5e september 2020 - 14:30", fontAwesome: "far fa-clock" },
    { text: "Dresscode: Det finaste du har", fontAwesome: "fas fa-tshirt" },
    { text: "Presenter: Pengar till smekmånaden", fontAwesome: "fas fa-gift" },
    { text: "Festen är barnfri", fontAwesome: "fas fa-baby" },
    { type: "linebreak" },
    {
      text: "Vid tal och liknande hör av er till:",
      fontAwesome: "far fa-comment"
    },
    {
      text: "Toastmadame: Mathilda Mattsson 0708706660",
      fontAwesome: "fas fa-female"
    },
    {
      text: "Toastmaster: Robert Lucchesi 0739189604",
      fontAwesome: "fas fa-male"
    }
  ];

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
          klockan 14:30
          <br />
          Om vädret tillåter sker vigseln utomhus. Detta firar vi sen med en
          storartad fest!
          <br />
          O.S.A. senast...
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
