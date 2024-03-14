import React from "react"
import Card from "react-bootstrap/Card"
import LuisB from './LuisB.jpg'
import { CardText } from "react-bootstrap";

function GitHubCard() {
const id = "Luis Beltran"
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={LuisB} />
        <Card.Body>
            <Card.Title>{id}</Card.Title>
            <CardText>
                My Name is {id} and I like to play videogames.
            </CardText>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard