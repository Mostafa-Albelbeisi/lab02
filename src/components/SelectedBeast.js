import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

class SelectedBeast extends React.Component {
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
    const displayModal = this.props.displayModal;
    const image = this.props.selectedBeast.image_url;
    const title = this.props.selectedBeast.title;
    const description = this.props.selectedBeast.description;
    return (
      <Modal show={displayModal} onHide={this.props.hideModal}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card style={{ width: "26rem" }}>
              <Card.Img src={image} onClick={this.incrementNumOfPets} />
              <Card.Text>Number of picture: {this.state.numOfPets}</Card.Text>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }
}

export default SelectedBeast;
