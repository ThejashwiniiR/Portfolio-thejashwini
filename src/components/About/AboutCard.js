import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thejashwini Ramadas </span>
            from <span className="purple"> Vellore, India.</span>
            <br /> I am a third year student pursuing Mtech integrated computer science engineering
            at VIT vellore. I have involved myself in few projects and research paper to improve my ability and skills.
            <br />
            Additionally, I am currently doing an vit internship at ethnus.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music and Podcast
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Thejashwini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
