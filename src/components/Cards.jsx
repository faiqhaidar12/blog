import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import Gambar1 from "../assets/images/4.jpg";

const Cards = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container">
      <div className="inline-flex row p-3 gap-3 justify-content-center">
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Gambar1} className="mt-2" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Go somewhere
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Gambar1} className="mt-2" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Go somewhere
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Gambar1} className="mt-2" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Go somewhere
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Gambar1} className="mt-2" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Go somewhere
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </div>
      <h1 className="text-center mt-2">Technology</h1>
      <p className="text-center container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi, esse
        distinctio maiores natus aut explicabo eaque doloremque nemo omnis error
        numquam at sint fugiat repudiandae ea voluptate laborum quae eum libero.
        Repellat molestiae est dolores, beatae doloremque recusandae amet
        exercitationem repudiandae sit placeat aut ea ipsum labore distinctio
        natus deleniti, nobis in ex cum ut quibusdam! Nesciunt, porro cumque.
        Ab, quo iure. Corrupti adipisci sed omnis ipsa aspernatur hic, placeat
        aliquid blanditiis assumenda. Magnam doloribus placeat totam, officia
        ipsa expedita facilis! Aspernatur, accusamus itaque unde exercitationem
        quia rem? Commodi quos temporibus sed voluptas perspiciatis excepturi
        nemo officia, debitis consequuntur?
      </p>
      <div className="container-fluid row"></div>
    </div>
  );
};

export default Cards;
