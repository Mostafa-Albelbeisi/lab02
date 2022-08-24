import React from "react";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import data from "./Data";

class Filter extends React.Component {
    filter = (e) => {
      const numOfPets = parseInt(e.target.value);
      let beastData = data;
      if (numOfPets) {
        beastData = data.filter((beats) => beats.horns === numOfPets);
      }
      this.props.showBeasts(beastData);
    };
  render() {
    return (
      <Form>
        <Container>
          <Form.Group className="mb-3">
            <Form.Label>filter</Form.Label>
            <Form.Select id="disabledSelect" onChange={this.filter}>
              <option>Select a number of horns</option>
              <option value={1}>1 </option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={100}>more</option>
            </Form.Select>
          </Form.Group>
        </Container>
      </Form>
    );
  }
}
export default Filter;
