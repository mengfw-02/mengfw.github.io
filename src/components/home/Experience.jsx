import React from 'react';
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";
import { about } from "../../editable-stuff/config.js";

const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {experiences.heading}
          </h2>
          <Row>
            <a
                className="btn btn-outline-dark btn-lg"
                href={experiences.timeline}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Timeline">
                My Time Line</a>
          </Row>

        </Jumbotron>
      </Container>
    </section>
  );
}

export default Experience;