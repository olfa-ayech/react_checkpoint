
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import reactDom from 'react-dom';
//import './style.css'

class Formss extends Component {
   
    
  render() {
    
     
    return (
    <Container className="container">
      <Form className="formm">
        <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control   className="textt" type="text" placeholder="Enter your firstname"    />
        </Form.Group>
        <Form.Group controlId="lastName">
            <Form.Label> Last Name</Form.Label>
            <Form.Control name="d"  className="textt" type="text" placeholder="Enter your lastname"   />
        </Form.Group>
        <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="textt" type="email" placeholder="name@example.com"  />
        </Form.Group>
        <Form.Group controlId="pone-number">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control className="textt" type="text" placeholder="33254157"  />
        </Form.Group>
        <Form.Group  controlId="formAge">
            <Form.Label className="age"> Age</Form.Label>
            <Form.Control className="textt" type="number" defaultValue="10"   />
        </Form.Group > 
        </Form>
        <div className="mf">
         <Form.Group controlId="male"  >
            <Form.Label>Male</Form.Label>
            <Form.Check  />
            </Form.Group> 
            <Form.Group controlId="female"  >
            <Form.Label>Female</Form.Label>
            <Form.Check  />
           </Form.Group>
           </div>
        <div className="button"> 
        <Button className="btn" onClick={()=>alert("Done!!")}> Submit</Button>
        <Button className="btn"> Cansel</Button></div> 
          
    </Container>
    );
  }
       
}


export default Formss;