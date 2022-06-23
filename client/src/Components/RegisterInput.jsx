import React, { useState } from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { MdOutlineMailOutline} from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring'
import { FiStar } from "react-icons/fi";



const RegisterInput = () => {

  return (
  <div style={{ height: 800, width: "60%", margin: "auto", marginTop: "8%", borderRadius: 20}}   >
    <Form >
      <Form.Group className="mb-1" controlId="formBasicEmail" style={{maxWidth: 350, margin: "auto"}}>
      <Form.Label style={{ marginTop: 30}}>First Name</Form.Label>
        <InputGroup className="mb-1">
            <InputGroup.Text><FiStar /></InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="First Name" />
          </InputGroup>
        <Form.Label style={{ marginTop: 30}}>Last Name</Form.Label>
        <InputGroup className="mb-1">
            <InputGroup.Text><FiStar /></InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="Last Name" />
          </InputGroup>
        <Form.Label style={{ marginTop: 30}}>Email address</Form.Label>
        <InputGroup className="mb-1">
            <InputGroup.Text><MdOutlineMailOutline /></InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="Email" />
          </InputGroup>

        <Form.Text className="text-muted"  style={{textAlign: "center"}}>
          We'll never share your information.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" style={{maxWidth: 350, margin: "auto"}}>
        <Form.Label>Password</Form.Label>
        <InputGroup className="mb-2">
            <InputGroup.Text><RiLockPasswordLine /></InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="Password" />
          </InputGroup>
      </Form.Group>
      <div style={{ textAlign: 'center'}}>
      <Button sx={{backgroundColor: "black !important", color: "white", background: 'none', width: "100%", marginTop: 1, height: 30 }}>Register</Button>
      <h5>or</h5>
      <Link to='/' style={{ textDecoration: "none"}}><Button sx={{backgroundColor: "black !important", color: "white", background: 'none', width: "100%", height: 30 }}>Login</Button></Link>
      </div>
    </Form>
  </div>
  )
}

export default RegisterInput;