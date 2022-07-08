import React, { Component } from "react";
import "./card-list.styles.css";
export class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h2>{monster.name}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
