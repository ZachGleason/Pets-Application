import React, { useState } from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { MdOutlineMailOutline} from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from '@mui/material/Button';
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios'


const LoginInput = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleRegistration = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/user/register', 
    {
      "username":username,
      "phone": "811.123.1156",
      "email": email,
      "password": password
    })
    .then( res => {
      console.log(res.data)
    })
    .catch( err => {
      console.log(err)
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/user/login', 
    {
      "email": email,
      "password": password
    })
    .then( res => {
      console.log(res.data)
      //TODO navigate to 
      navigate("/Dashboard")
    })
    .catch( err => {
      console.log(err)
    })

  }

  return (
  <div style={{ height: 500, width: "60%", margin: "auto", marginTop: "8%", borderRadius: 20}}   >
    <Form >
      <Form.Group className="mb-2" controlId="formBasicEmail" style={{maxWidth: 350, margin: "auto"}}>
        {/* <h3 className='welcome'>Welcome back</h3> */}
        <Form.Label style={{ marginTop: 30}}>Email address</Form.Label>
        <InputGroup className="mb-2" onChange={ e => setEmail(e.target.value)}>
            <InputGroup.Text><MdOutlineMailOutline /></InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="Email" />
          </InputGroup>
        <Form.Text className="text-muted"  style={{textAlign: "center"}}>
          We'll never share your information.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicEmail" style={{maxWidth: 350, margin: "auto"}}>
        <Form.Label>Password</Form.Label>
        <InputGroup className="mb-2" onChange={ e => setPassword(e.target.value)}>
            <InputGroup.Text><RiLockPasswordLine /></InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="Password" />
          </InputGroup>
      </Form.Group>
      <div style={{ textAlign: 'center'}}>
      <Button onClick={handleLogin} type='submit' sx={{backgroundColor: "black !important", color: "white", background: 'none', width: "100%", marginTop: 1, height: 30 }}>Sign in</Button>
      <h5 style={{ fontFamily: 'Abel', marginTop: 10 }}>or</h5>
      <Link to='/register' style={{ textDecoration: "none"}}><Button sx={{backgroundColor: "black !important", color: "white", background: 'none', width: "100%", height: 30 }}>Register</Button></Link>
      </div>
    </Form>
  </div>
  )
}

export default LoginInput;