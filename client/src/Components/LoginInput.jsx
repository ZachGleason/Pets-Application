import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { MdOutlineMailOutline} from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



const LoginInput = () => {
  return (
  <div style={{ height: 500, width: "60%", margin: "auto", marginTop: "8%", borderRadius: 20}}   >
    <Form >
      <Form.Group className="mb-2" controlId="formBasicEmail" style={{maxWidth: 350, margin: "auto"}}>
        {/* <h3 className='welcome'>Welcome back</h3> */}
        <Form.Label style={{ marginTop: 30}}>Email address</Form.Label>
        <InputGroup className="mb-2">
            <InputGroup.Text><MdOutlineMailOutline /></InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="Email" />
          </InputGroup>
        <Form.Text className="text-muted"  style={{textAlign: "center"}}>
          We'll never share your information.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicEmail" style={{maxWidth: 350, margin: "auto"}}>
        <Form.Label>Password</Form.Label>
        <InputGroup className="mb-2">
            <InputGroup.Text><RiLockPasswordLine /></InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="Password" />
          </InputGroup>
      </Form.Group>
      <div style={{ textAlign: 'center'}}>
      <Button type='submit' sx={{backgroundColor: "black !important", color: "white", background: 'none', width: "100%", marginTop: 1, height: 30 }}>Sign in</Button>
      <h5 style={{ fontFamily: 'Abel', marginTop: 10 }}>or</h5>
      <Link to='/register' style={{ textDecoration: "none"}}><Button sx={{backgroundColor: "black !important", color: "white", background: 'none', width: "100%", height: 30 }}>Register</Button></Link>
      </div>
    </Form>
  </div>
  )
}

export default LoginInput;