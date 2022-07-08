import React, { Component } from "react";
import "./card-list.styles.css";
import "./card.styles.css";
export class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <div key={monster.id} className="card-container">
              <img
                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
                alt={`${monster.name}`}
              />
              <h2>{monster.name}</h2>
              <p>{monster.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
