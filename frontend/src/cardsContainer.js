import React from "react";
import Cards from "./cards.js";

export default function CardsContainer(props) {
  let personStateArray = props.personsState;
  let personsStateMapped = personStateArray.map((item) => (
    <Cards key={item.id} item={item} />
  ));

  return <div className="nameCont">{personsStateMapped}</div>;
}
