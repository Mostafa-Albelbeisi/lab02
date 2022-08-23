import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
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
  render() {
    return (

          <Col>
            <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={this.props.image_url} onClick = {this.incrementNumOfPets} />
              <Card.Body>
              <Card.Text>
             Number of picture: {this.state.numOfPets}
             </Card.Text>

            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.id}</Card.Text>
        <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.props.keyword}</Card.Text>
             <Card.Text>{this.props.horns}</Card.Text>
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
