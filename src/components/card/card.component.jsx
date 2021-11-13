import React from "react";
import { withRouter } from "react-router";

import "./card.styles.css";

const Card = (props) => (
  <div className="card-container" onClick={() => props.history.push(`/posts/${props.monster.id}`)}>
  <img
    src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    alt="monster"
  />
  <h2> {props.monster.name} </h2>
  <p> {props.monster.email} </p>
</div>
);

export default withRouter(Card);
