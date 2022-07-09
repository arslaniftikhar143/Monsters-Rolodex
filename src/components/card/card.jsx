import React, { Component } from "react";
import "./card.styles.css";

export class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div key={id} className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`${name}`}
        />
        <div className="card-heading">{name}</div>
        <div>{email}</div>
      </div>
    );
  }
}

export default Card;
