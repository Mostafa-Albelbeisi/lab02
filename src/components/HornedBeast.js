import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfPets: "",
    };
  }

  incrementNumOfPets = () => {
    this.setState({
      numOfPets: this.state.numOfPets + "🦁",
    });
  };

  seeMe = () => {
    this.props.showModal(this.props.title);
  };
  render() {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.img}
            onClick={this.incrementNumOfPets}
          />
          <Card.Body >
            <Card.Text>Number of picture: {this.state.numOfPets}</Card.Text>

            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.id}</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.props.keyword}</Card.Text>
            <Card.Text>{this.props.horns}</Card.Text>
            <button onClick={this.seeMe}>Open</button>
          </Card.Body>
        </Card>
      </Col>

      //   <Card style={{ width: '18rem' }}>
      //   <Card.Img variant="top" src={this.props.image_url} onClick = {this.incrementNumOfPets} />
      //   <Card.Body>
      //      <Card.Text>
      //       Number of picture: {this.state.numOfPets}
      //      </Card.Text>

      //     <Card.Title>{this.props.title}</Card.Title>
      //     <Card.Text>{this.props.id}</Card.Text>
      //     <Card.Text>{this.props.description}</Card.Text>
      //     <Card.Text>{this.props.keyword}</Card.Text>
      //     <Card.Text>{this.props.horns}</Card.Text>

      //     <Button variant="primary">Go somewhere</Button>
      //   </Card.Body>
      // </Card>
    );
  }
}
export default HornedBeast;
