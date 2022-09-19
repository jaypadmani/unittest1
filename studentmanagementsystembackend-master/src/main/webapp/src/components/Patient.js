import axios from "axios";
import React, {useState} from "react";
import { Container, Form, Card, Button } from "react-bootstrap";


export default function Patient() {

  const [id, setId] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();

  let patient = {
    id : id,
    name : name,
    age : age,
    address : address
  }

  let textChanged = (event) => {
    if(event.target.name==="id"){
      setId(event.target.value);
    } else if(event.target.name==="name"){
      setName(event.target.value);
    }
    else if(event.target.name==="age"){
      setAge(event.target.value);
    }
    else if(event.target.name==="address"){
      setAddress(event.target.value);
    }

  }

  let savePatient = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/patient", patient)
    .then(response => {
      if(response.data != null){
        alert('Record added successfully');
      }
    })
    .catch(error => alert(error));
  }

  return (
    <div  className="my-3">
    <Container>
      <Card>
        <Form onSubmit={savePatient}>
          <Card.Header>Add Patient Information</Card.Header>
          <Card.Body>
            <Form.Group className="mb-3">
              <Form.Label>Id</Form.Label>
              <Form.Control name="id" value={id} type="text" placeholder="Enter Id" onChange={textChanged}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={name} type="text" placeholder="Enter Name" onChange={textChanged} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control name="age" value={age} type="text" placeholder="Enter Age" onChange={textChanged} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control name="address" value={address} type="text" placeholder="Enter Address" onChange={textChanged} />
            </Form.Group>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </Card.Footer>
        </Form>
      </Card>
    </Container>
    </div>
  );
}