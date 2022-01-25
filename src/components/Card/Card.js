import React from "react";


function Card(props) {
  return (
    <li className="card" key={props.id}>
      <div
        className={
          props.theme
            ? "card__category-container card__category-container_blue"
            : "card__category-container"
        }
      >
        <p className="card__category-name">
          {!props.category ? "category" : "category" + "|" + props.category}
        </p>
      </div>

      <img className="card__image" href={props.image}></img>

      <p
        className={
          props.theme ? "card__author card__author_blue" : "card__author"
        }
      >
        {props.author}
      </p>

      <h2 className="card__title">{props.title}</h2>
      <p className="card__subtitle">{props.subtitle}</p>

      <button
        className={
          props.theme ? "card__button card__button_blue" : "card__button"
        }
      >
        Call to action
      </button>
    </li>
  );
}

export default Card;
