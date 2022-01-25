import React from "react";
import reactDom from "react-dom";

import cardData from "../../vendor/data.json";
import Card from "../Card/Card";

function CardList() {
  let numberOfcards = 6;
  return (
    <ul className="card-list">
      {cardData
        // .slice(0, numberOfMovies)
        .map((card) => (
          <Card
            key={card.id}
            image={card.image}
            author={card.author}
            title={card.author}
            subtitle={card.subtitle}
            category={card.category}
            theme={card.theme}
          />
        ))}
    </ul>
  );
}


export default CardList;
